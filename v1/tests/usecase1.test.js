const tap = require('tap')
const move = require('../index')
const glob = require('glob')

const useCases = glob.sync('./data/usecase1/*.json', { cwd: 'tests/' }).map(require)

for (useCase of useCases) {
  const expectedResults = useCase.solution
  const actualResults = move(useCase)
  tap.strictSame(actualResults, expectedResults)
}




