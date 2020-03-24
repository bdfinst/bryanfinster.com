const {
  processFigure,
  processFigcaption,
  transformJSONForMarkdown,
} = require('../src/blogTransform')
const fixtures = require('./fixtures')

describe(`transformJSONForMarkdown`, () => {
  const expectedLink = {
    link: { title: 'title', source: 'https://www.flickr.com' },
  }

  it('should build an image element with the URL as the title', () => {
    const toObj = {
      img: {
        title: expectedLink,
        source: './image.png',
      },
    }

    expect(processFigure(fixtures.figure)).toEqual(toObj)
  })

  it('should build an image title', () => {
    expect(processFigcaption(fixtures.figcaption)).toEqual(expectedLink)
  })

  it('should do the thing', () => {
    transformJSONForMarkdown(fixtures.fixture2)
  })
})
