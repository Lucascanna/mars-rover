const tap = require('tap')
const multipleMove = require('../index')

const useCases = [
  require('./data/usecase3/1.json'),
  require('./data/usecase3/2.json'),
  require('./data/usecase3/3.json'),
  require('./data/usecase3/4.json'),
  require('./data/usecase3/5.json'),
  require('./data/usecase3/6.json'),
]

for (useCase of useCases) {
  const expectedResults = useCase.map(strategy => strategy.solution)
  const actualResults = multipleMove(useCase)
  tap.strictSame(expectedResults, actualResults)
}




