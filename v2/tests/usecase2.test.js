const tap = require('tap')
const { executeCommands } = require('../index')

tap.test('usecase 1', mainTest => {

  mainTest.test('base case with f, l, b and initial position 2,2', test => {
    const input = {
      startingCoordinates: [2,2],
      direction: 'N',
      commands: ['f', 'l', 'b']
    }
    
    const output = {
      position: [3,3],
      direction: 'W'
    }
    const actualResult = executeCommands(input)
    const expectedResult = output
    test.strictSame(expectedResult, actualResult)
    test.end()
  })

  mainTest.test('base case with f, l, b and initial position 2,2', test => {
    const input = {
      startingCoordinates: [2,2],
      direction: 'N',
      commands: ['f', 'f', 'r', 'f', 'f']
    }
    
    const output = {
      position: [4,4],
      direction: 'E'
    }
    const actualResult = executeCommands(input)
    const expectedResult = output
    test.strictSame(expectedResult, actualResult)
    test.end()
  })

  mainTest.end()
})