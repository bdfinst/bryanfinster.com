const R = require('ramda')

const hasChildren = (node) => {
  return R.is(Object, node) && R.is(Array, node.child) && node.child.length > 0
}

const processAnchor = (obj) => {
  if (obj.node === 'element' && obj.tag === 'a') {
    return {
      link: { source: obj.attr.href, title: obj.child[0].text },
    }
  } else {
    return obj
  }
}

const processFigcaption = (obj) => {
  if (
    obj.tag &&
    obj.tag === 'figcaption' &&
    obj.child &&
    obj.child.length > 0
  ) {
    return processAnchor(obj.child[0])
  } else {
    return obj
  }
}

const processText = (obj) => {
  if (obj.node === 'text') {
    return obj.text
  } else {
    return obj
  }
}

const processFigure = (obj) => {
  if (obj.tag === 'figure') {
    return {
      img: {
        source: obj.child[0].attr.src,
        title: processFigcaption(obj.child[1]),
      },
    }
  } else {
    return obj
  }
}

const processPara = (obj) => {
  if (obj.tag === 'p') {
    const para = obj.child
      .map((item) => {
        return R.pipe(processText, processAnchor)(item)
      })
      .reduce((str, curr) => {
        return `${str} ${curr}`
      })

    return { p: para }
  } else {
    return obj
  }
}

const transformJSONForMarkdown = (obj) => {
  const newContent = obj.content.child.map((item) => {
    return R.pipe(processFigure, processPara)(item)
  })

  console.log(JSON.stringify(newContent, null, 2))

  return { p: newContent }
}

module.exports = {
  transformJSONForMarkdown,
  processFigure,
  processFigcaption,
  processAnchor,
}
