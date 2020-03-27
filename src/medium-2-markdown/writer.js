const fs = require('fs')
const path = require('path')

const write = (outputDir, file, data) => {
  const filePath = path.join(outputDir, `${file.replace('_','-')}.md`)
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, data)
    return path.basename(filePath)
  }
}

module.exports = write
