const fs = require('fs')
const cheerio = require('cheerio')
const yaml = require('js-yaml')
const url = require('url')
const { getImageName } = require('./utils')

const readAll = (filePath, frontMatterConfig) => {
  const contents = fs.readFileSync(filePath)

  const $ = cheerio.load(contents)

  const canonical = $('.p-canonical').attr('href')
  $('.graf--title').remove()
  $('.graf--subtitle').remove()
  $('.section-divider').remove()

  let html = $('.e-content').html() || ''
  if (frontMatterConfig !== true) {
    html = $('.h-entry').html() || ''
  }

  const title = $('.p-name').text()
  const subtitle = $('.p-summary[data-field="subtitle"]').text()
  const date = $('.dt-published').attr('datetime')
  const slug = canonical ? url.parse(canonical).path : ''
  const cover = $('.graf-image[data-is-featured="true"]').attr('data-image-id')
  const tags = []

  console.log($('.graf-image[data-is-featured="true"]').attr('data-image-id'))

  const frontMatter = generateFrontMatter(
    title,
    subtitle,
    cover,
    date,
    slug,
    tags,
  )

  return { html, frontMatter }
}

// ---
// title: Perfecting the Art of Perfection
// date: "2016-09-01T23:46:37.121Z"
// template: "post"
// draft: false
// slug: "perfecting-the-art-of-perfection"
// category: "Design Inspiration"
// tags:
//   - "Handwriting"
//   - "Learning to write"

const generateFrontMatter = (title, subtitle, cover, date, slug, tags) => {
  const frontMatter = {
    title: title.toString().replace(/\n/g, ''),
    socialImage: getImageName(cover.toString()) || '',
    template: 'post',
    draft: false,
    description: subtitle ? subtitle.toString().replace(/\n/g, '') : '',
    date: date || '',
    category: 'devops',
    tags: [],
    slug: slug ? slug.toString().replace('/@bdfinst/', '') : '',
  }

  frontMatter.tags = tags.length > 0 ? tags : ['devops']
  const yml = yaml.safeDump(frontMatter)
  console.log(yml)
  return yml
}

module.exports = {
  readAll,
}
