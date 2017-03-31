const fs = require('fs')
const path = require('path')
const caseConverter = require('case-converter')

const nouns = fs.readFileSync(path.join(__dirname, './dict/nouns')).toString()
const adjectives = fs.readFileSync(path.join(__dirname, './dict/adjectives')).toString()

const nounsArr = nouns.split('\n')
const adjectivesArr = nouns.split('\n')

module.exports = (wordCase) => {
  let genWord = adjectivesArr[Math.floor(Math.random()*adjectivesArr.length)] + ' ' + nounsArr[Math.floor(Math.random()*nounsArr.length)]
  let retWord = ''

  switch (wordCase) {
  case 'camel':
    retWord = caseConverter.toCamelCase(genWord)
      break
  case 'kebab':
    retWord = caseConverter.toKebabCase(genWord)
    break
  case 'snake':
    retWord = caseConverter.toSnakeCase(genWord)
    break
  }

  return retWord
}
