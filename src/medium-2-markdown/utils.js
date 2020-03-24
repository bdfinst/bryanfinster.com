const url = require('url')
const path = require('path')

const getImageName = (imgSrc) => {
  const imgUrl = url.parse(imgSrc)
  let imgFileName = path.basename(imgUrl.pathname)
  const parsed = path.parse(imgFileName)
  const name = parsed.name.replace(/[^a-zA-Z0-9]/g, '__')
  const ext = parsed.ext ? parsed.ext : '.jpg' // if no extension, add .jpg
  imgFileName = name + ext
  return imgFileName
}

module.exports = { getImageName }
