const tap = require('tap')
const { executeCommands } = require('../index')

tap.test('usecase 1', mainTest => {

  mainTest.test('base case with f, f, b and initial position 2,2', test => {
    const input = {
      startingCoordinates: [2,2],
      direction: 'N',
      commands: ['f', 'f', 'b']
    }
    
    const output = {
      position: [2,3],
      direction: 'N'
    }
    const actualResult = executeCommands(input)
    const expectedResult = output
    test.strictSame(expectedResult, actualResult)
    test.end()
  })

  mainTest.test('base case with b, f, b and initial position 2,2', test => {
    const input = {
      startingCoordinates: [2,2],
      direction: 'N',
      commands: ['b', 'f', 'b']
    }
    
    const output = {
      position: [2,1],
      direction: 'N'
    }
    const actualResult = executeCommands(input)
    const expectedResult = output
    test.strictSame(expectedResult, actualResult)
    test.end()
  })

  mainTest.test('base case with b and initial position 2,2', test => {
    const input = {
      startingCoordinates: [2,2],
      direction: 'N',
      commands: ['b']
    }
    
    const output = {
      position: [2,1],
      direction: 'N'
    }
    const actualResult = executeCommands(input)
    const expectedResult = output
    test.strictSame(expectedResult, actualResult)
    test.end()
  })

  mainTest.test('when command is invalid it will be ignored', test => {
    const input = {
      startingCoordinates: [2,2],
      direction: 'N',
      commands: ['d', 'f', 'b']
    }
    
    const output = {
      position: [2,2],
      direction: 'N'
    }
    const actualResult = executeCommands(input)
    const expectedResult = output
    test.strictSame(expectedResult, actualResult)
    test.end()
  })

  mainTest.test('when direction is invalid it will be ignored', test => {
    test.plan(1)
    const input = {
      startingCoordinates: [2,2],
      direction: 'X',
      commands: ['f', 'b']
    }

    try {
      executeCommands(input)
    } catch (exception) {
      test.strictSame(exception, 'Invalid direction')
    }
  })
  mainTest.end()
})