const tap = require('tap')
const multipleMove = require('../index')

const useCases = [
  require('./data/usecase1/1.json'),
  require('./data/usecase1/2.json'),
  require('./data/usecase1/3.json'),
  require('./data/usecase1/4.json'),
  require('./data/usecase1/5.json'),
  require('./data/usecase1/6.json'),
  require('./data/usecase1/7.json'),
  require('./data/usecase1/8.json'),
]

for (useCase of useCases) {
  const expectedResults = useCase.map(strategy => strategy.solution)
  const actualResults = multipleMove(useCase)
  tap.strictSame(expectedResults, actualResults)
}




