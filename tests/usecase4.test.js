const tap = require('tap')
const move = require('../index')

const useCases = [
  require('./data/usecase4/1.json'),
  require('./data/usecase4/2.json'),
  require('./data/usecase4/3.json'),
  require('./data/usecase4/4.json'),
  require('./data/usecase4/5.json'),
  require('./data/usecase4/6.json'),
  require('./data/usecase4/7.json'),
  require('./data/usecase4/8.json'),
  require('./data/usecase4/9.json'),
  require('./data/usecase4/10.json')
]

for (useCase of useCases) {
  const expectedResults = useCase.solution
  const actualResults = move(useCase)
  tap.strictSame(actualResults, expectedResults)
}




