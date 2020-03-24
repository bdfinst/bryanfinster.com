const fs = require('fs')
const path = require('path')
const read = require('./reader')
const convert = require('./converter')
const write = require('./writer')
const downloader = require('./downloader')
const config = require('./config')

const createPath = (path) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path)
  }
}

const getFilesToConvert = (path) => {
  return fs.existsSync(path) ? fs.readdirSync(path) : []
}

const processAll = () => {
  try {
    const root = process.cwd()
    const inputPath = path.normalize(config.inputPath)
    const outputPath = path.join(root, config.outputPath)
    const imagePath = path.join(outputPath, 'img')

    createPath(outputPath)
    createPath(imagePath)

    getFilesToConvert(inputPath).forEach(async (file) => {
      try {
        if (path.parse(file).ext === '.html') {
          if (includeDrafts(file, config.drafts)) {
            const readOutput = read.readAll(
              path.join(inputPath, file),
              config.frontMatter,
            )
            const converterResult = convert(readOutput.html)

            //START: getting images
            const promises = []

            converterResult.images.forEach((v) => {
              const localImgPath = path.join(imagePath, v.name)
              promises.push(downloader(v.src, localImgPath))
            })

            await Promise.all(promises)
            //END: getting images

            const data = mergeOutputs(
              readOutput,
              converterResult.md,
              config.frontMatter,
            )
            const fileName = write(outputPath, path.parse(file).name, data)
            console.log(`Completed: ${fileName}`)
          }
        }
      } catch (err) {
        console.log(`Error converting file: ${file}. Skipping.`)
      }
    })

    console.log(`Output path: ${outputPath}`)
  } catch (err) {
    console.log(err.message)
  }
}

const mergeOutputs = (readOutput, md, frontMatter) => {
  let data
  if (frontMatter) {
    data = `---\n${readOutput.frontMatter}---\n\n${md}`
  } else {
    // In case the front matter is disabled, don't prepend it
    data = md
  }

  return data
}

const includeDrafts = (fileName, enableDrafts) => {
  return !enableDrafts && fileName.indexOf('draft_') > -1 ? false : true
}

module.exports = {
  processAll,
}
