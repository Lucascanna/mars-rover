const movements = {
  N: {
    b: {
      x: 0,
      y: -1
    },
    f: {
      x: 0,
      y: 1
    }
  },
  S: {
    b: {
      x: 0,
      y: 1
    },
    f: {
      x: 0,
      y: -1
    }
  },
  E: {
    b: {
      x: -1,
      y: 0
    },
    f: {
      x: 1,
      y: 0
    }
  },
  W: {
    b: {
      x: 1,
      y: 0
    },
    f: {
      x: -1,
      y: 0
    }
  }
}

function retrieveMoveFromMap(direction, command) {
  const directionMovements = movements[direction]
  if (!directionMovements) {
    throw 'Invalid direction'
  }
  const move = directionMovements[command]
  if (!move) {
    return [0,0]
  }
  return [move.x, move.y]
}

function move(startingCoordinates, direction, command) {
  const moves = retrieveMoveFromMap(direction, command)
  const newX = startingCoordinates[0] + moves[0]
  const newY = startingCoordinates[1] + moves[1]
  return {
    position: [newX, newY],
    direction
  }
}

function executeCommands({ startingCoordinates, direction, commands }) {
  if (commands.length === 0) {
    return {
      position: startingCoordinates,
      direction
    }
  }
  const { position: newCoordinates, direction: newDirection } = move(startingCoordinates, direction, commands[0])
  return executeCommands({
    startingCoordinates: newCoordinates,
    direction: newDirection,
    commands: commands.slice(1)
  })
}

module.exports = { executeCommands }