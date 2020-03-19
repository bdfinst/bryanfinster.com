/* eslint-disable no-console */
const https = require('https')
const moment = require('moment')
const fs = require('fs')
const { parseString } = require('xml2js')

const feedURL = 'https://medium.com/feed/@bdfinst'
const blogPath = 'content/blog/'

const buildFileName = blog => {
  const dateFormat = 'YYYY-MM-DD'
  const title = blog.link[0] || 'MISSING'
  const published =
    moment(blog.pubDate[0]).format(dateFormat) || moment().format(dateFormat)

  return `${published}-${title.substring(
    title.lastIndexOf('/') + 1,
    title.lastIndexOf('?')
  )}`
}

const parseMediumXML = xmlString => {
  parseString(xmlString, function(err, result) {
    const { rss = {} } = result
    const { channel = [] } = rss
    const blogPosts = channel[0].item

    blogPosts.map(post => {
      const fileName = buildFileName(post)
      fs.writeFile(
        `${blogPath}/${fileName}.json`,
        JSON.stringify(post, null, 4),
        () => {
          console.log(`Saved ${fileName}`)
        }
      )

      return fileName
    })
  })
}

const fetchMediumXML = () => {
  console.log('fetching medium articles....')
  https
    .get(feedURL, resp => {
      let data = ''

      // A chunk of data has been recieved.
      resp.on('data', chunk => {
        data += chunk
      })

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        console.log('Successful download')
        parseMediumXML(data)
      })
    })
    .on('error', err => {
      console.log(`Fetch error: ${err.message}`)
    })
}

fetchMediumXML()
