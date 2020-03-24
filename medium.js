/* eslint-disable no-console */
const https = require('https')
const moment = require('moment')
const fs = require('fs')
const { parseString } = require('xml2js')
const json2md = require('json2md')
const { html2json } = require('html2json')
const R = require('ramda')
const { transformJSONForMarkdown } = require('./src/blogTransform')

const feedURL = 'https://medium.com/feed/@bdfinst'
const blogPath = 'content/blog/'

const buildFileName = (blog) => {
  const dateFormat = 'YYYY-MM-DD'
  const title = blog.link[0] || 'MISSING'
  const published =
    moment(blog.pubDate[0])
    .format(dateFormat) || moment()
    .format(dateFormat)

  return `${published}-${title.substring(
    title.lastIndexOf('/') + 1,
    title.lastIndexOf('?'),
  )}`
}

const replaceKey = (json, key, newKey) => {
  return JSON.parse(JSON.stringify(json)
    .replace(key, newKey))
}

const structureContentToJson = (content) => {
  const pipe = R.pipe(html2json, extractImage)
  return pipe(content)
}

const extractImage = (post) => {
  const newPost = transformForMarkdown(post)
  return newPost
}

const convertToBlog = (mediumPost) => {
  const fixedTags = replaceKey(
    replaceKey(mediumPost, 'dc:creator', 'author'),
    'content:encoded',
    'content',
  )

  const post = {
    title: fixedTags.title[0],
    link: fixedTags.link[0].split('?')[0],
    author: fixedTags.author[0],
    published: fixedTags.pubDate[0],
    tags: fixedTags.category,
    content: structureContentToJson(fixedTags.content[0]),
  }

  return JSON.stringify(post, null, 2)
  // const md= json2md(json)
  //   console.log(md)
}

const parseMediumXML = (xmlString) => {
  parseString(xmlString, (err, result) => {
    const { rss = {} } = result
    const { channel = [] } = rss
    const blogPosts = channel[0].item

    blogPosts.map((post) => {
      const fileName = buildFileName(post)
      fs.writeFile(`${blogPath}/${fileName}.json`, convertToBlog(post), () => {
        console.log(`Saved ${fileName}`)
      })

      return fileName
    })
  })
}

const fetchMediumXML = () => {
  console.log('fetching medium articles....')
  https
    .get(feedURL, (resp) => {
      let data = ''

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk
      })

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        console.log('Successful download')
        parseMediumXML(data)
      })
    })
    .on('error', (err) => {
      console.log(`Fetch error: ${err.message}`)
    })
}

fetchMediumXML()
