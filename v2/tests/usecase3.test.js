const tap = require('tap')
const { executeCommands } = require('../index')

tap.test('usecase 3', mainTest => {

  mainTest.test('base case with f3, l2, b2 and initial position 2,2', test => {
    const input = {
      startingCoordinates: [2,2],
      direction: 'N',
      commands: ['f3', 'l2', 'b2']
    }
    
    const output = {
      position: [2,7],
      direction: 'S'
    }
    const actualResult = executeCommands(input)
    const expectedResult = output
    test.strictSame(expectedResult, actualResult)
    test.end()
  })

  mainTest.end()
})