const fs = require('fs')
const fetch = require('node-fetch')

const downloadImage = async (url, localPath) => {
  await fetch(url, { method: 'HEAD' })

  const response = await fetch(url)

  return await new Promise((resolve) => {
    return response.body
      .pipe(fs.createWriteStream(localPath))
      .on('close', resolve(localPath))
  })
}

module.exports = downloadImage
