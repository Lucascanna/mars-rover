const tap = require('tap')
const move = require('../index')

const useCases = [
  require('./data/usecase2/1.json'),
  require('./data/usecase2/2.json'),
  require('./data/usecase2/3.json'),
  require('./data/usecase2/4.json'),
  require('./data/usecase2/5.json'),
  require('./data/usecase2/6.json'),
  require('./data/usecase2/7.json'),
  require('./data/usecase2/8.json'),
]

for (useCase of useCases) {
  const expectedResults = useCase.solution
  const actualResults = move(useCase)
  tap.strictSame(actualResults, expectedResults)
}




