const TurndownService = require('turndown')
const path = require('path')
const isUrl = require('./isUrl')
const { getImageName } = require('./utils')
const config = require('../../config')

const config = {
  headingStyle: 'atx',
  hr: '---',
  bulletListMarker: '*',
  codeBlockStyle: 'fenced',
  fence: '```',
  emDelimiter: '_',
  strongDelimiter: '**',
  linkStyle: 'inlined',
  linkReferenceStyle: 'full',
}

const td = new TurndownService(config)
let images = []

// parsing figure and figcaption for markdown
td.addRule('figure', {
  filter: 'figure',
  replacement: (content) => {
    // This is a hack based on string parsing;
    // ugly and error prone.
    // Need to find a better way to do this!

    const lines = content.split('\n')
    let element = lines[2]

    const imgSrc = element.substring(4, element.length - 1)

    // This check is important as Medium renders embeds (YouTube, etc.) also as figures.
    if (isUrl(imgSrc)) {
      const imgFileName = getImageName(imgSrc)
      const localImgPath = path.join(`${config.pathPrefix}/media`, imgFileName)
      element = `![](${localImgPath})`
      images.push({
        src: imgSrc,
        name: imgFileName,
      })
    }

    if (lines[4]) {
      element = [element.slice(0, 2), lines[4], element.slice(2)].join('')
    }

    return `${element}\n${lines[4]}`
  },
})

const convert = (htmlStr) => {
  images = []
  return { md: td.turndown(htmlStr), images }
}

module.exports = convert
