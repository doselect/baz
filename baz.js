const fs = require('fs')
const path = require('path')
const caseConverter = require('case')

const nouns = fs.readFileSync(path.join(__dirname, './dict/nouns')).toString()
const adjectives = fs.readFileSync(path.join(__dirname, './dict/adjectives')).toString()

const nounsArr = nouns.split('\n')
const adjectivesArr = adjectives.split('\n')

module.exports = (wordCase) => {
  let genWord = adjectivesArr[Math.floor(Math.random()*adjectivesArr.length)] + '_' + nounsArr[Math.floor(Math.random()*nounsArr.length)]
  let retWord = ''

  switch (wordCase) {
  case 'camel':
    retWord = caseConverter.camel(genWord)
    console.log(retWord)
      break
  case 'kebab':
    retWord = caseConverter.kebab(genWord)
    break
  case 'snake':
    retWord = caseConverter.snake(genWord)
    break
  case 'pascal':
    retWord = caseConverter/pascal(genWord)
    break
  }

  return retWord
}
