const fs = require('fs')
const cheerio = require('cheerio')
const yaml = require('js-yaml')
const url = require('url')
const moment = require('moment')
const { getImageName } = require('./utils')

// ---
// cover: "8.jpg"
// date: "2017-01-01"
// category: "tech"
// tags:
//     - programming
//     - stuff
//     - other
// ---

const readAll = (filePath, frontMatterConfig) => {
  const contents = fs.readFileSync(filePath)

  const $ = cheerio.load(contents)

  const canonical = $('.p-canonical')
    .attr('href')
  $('.graf--title')
    .remove()
  $('.graf--subtitle')
    .remove()
  $('.section-divider')
    .remove()

  let html = $('.e-content')
    .html() || ''
  if (frontMatterConfig !== true) {
    html = $('.h-entry')
      .html() || ''
  }

  const title = $('.p-name')
    .text()
  const subtitle = $('.p-summary[data-field="subtitle"]')
    .text()
  const date = $('.dt-published')
    .attr('datetime')
  const slug = canonical ? url.parse(canonical)
    .path : ''
  const cover = $('.graf-image[data-is-featured="true"]')
    .attr('data-image-id')
  const tags = []

  console.log($('.graf-image[data-is-featured="true"]')
    .attr('data-image-id'))

  const frontMatter = generateFrontMatter(title, subtitle, cover, date, slug, tags)

  return { html, frontMatter }
}

const generateFrontMatter = (title, subtitle, cover, date, slug, tags) => {
  const dateFormat = 'YYYY-MM-DD'

  const frontMatter = {
    title: title.toString()
      .replace(/\n/g, ''),
    cover: getImageName(cover.toString()) || '',
    description: subtitle ?
      subtitle.toString()
      .replace(/\n/g, '') : '',
    date: date ? moment(date.toString())
      .format(dateFormat) : '',
    category: '',
    tags: [],
    slug: slug ? slug.toString() : '',
  }

  frontMatter.tags = tags ? tags : []
  const yml = yaml.safeDump(frontMatter)
  return yml
}

module.exports = {
  readAll,
}
