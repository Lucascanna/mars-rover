const movements = {
  N: {
    b: {
      x: 0,
      y: -1,
      direction: 'N'
    },
    f: {
      x: 0,
      y: 1,
      direction: 'N'
    },
    l: {
      x: 0,
      y: 0,
      direction: 'W'
    },
    r: {
      x: 0,
      y: 0,
      direction: 'E'
    }
  },
  S: {
    b: {
      x: 0,
      y: 1,
      direction: 'S'
    },
    f: {
      x: 0,
      y: -1,
      direction: 'S'
    },
    l: {
      x: 0,
      y: 0,
      direction: 'E'
    },
    r: {
      x: 0,
      y: 0,
      direction: 'W'
    }
  },
  E: {
    b: {
      x: -1,
      y: 0,
      direction: 'E'
    },
    f: {
      x: 1,
      y: 0,
      direction: 'E'
    },
    l: {
      x: 0,
      y: 0,
      direction: 'N'
    },
    r: {
      x: 0,
      y: 0,
      direction: 'S'
    }
  },
  W: {
    b: {
      x: 1,
      y: 0,
      direction: 'W'
    },
    f: {
      x: -1,
      y: 0,
      direction: 'W'
    },
    l: {
      x: 0,
      y: 0,
      direction: 'S'
    },
    r: {
      x: 0,
      y: 0,
      direction: 'N'
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

function retrieveDirectionFromMap(direction, command) {
  const directionMovements = movements[direction]
  const move = directionMovements[command]
  if (!move) {
    return direction
  }
  return move.direction
}

function move(startingCoordinates, direction, command) {
  const moves = retrieveMoveFromMap(direction, command)
  const newX = startingCoordinates[0] + moves[0]
  const newY = startingCoordinates[1] + moves[1]
  const newDirection = retrieveDirectionFromMap(direction, command)
  return {
    position: [newX, newY],
    direction: newDirection
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