const incrementMap = {
  'N': {
    'b': {
      0: 0,
      1: -1,
      direction: 'N',
    },
    'f': {
      0: 0,
      1: 1,
      direction: 'N',
    },
    'l': {
      0: 0,
      1: 0,
      direction: 'W',
    },
    'r': {
      0: 0,
      1: 0,
      direction: 'E',
    },
  },
  'S': {
    'b': {
      0: 0,
      1: 1,
      direction: 'S',
    },
    'f': {
      0: 0,
      1: -1,
      direction: 'S',
    },
    'l': {
      0: 0,
      1: 0,
      direction: 'E',
    },
    'r': {
      0: 0,
      1: 0,
      direction: 'W',
    },
  },
  'E': {
    'b': {
      0: -1,
      1: 0,
      direction: 'E',
    },
    'f': {
      0: +1,
      1: 0,
      direction: 'E',
    },
    'l': {
      0: 0,
      1: 0,
      direction: 'N',
    },
    'r': {
      0: 0,
      1: 0,
      direction: 'S',
    },
  },
  'W': {
    'b': {
      0: +1,
      1: 0,
      direction: 'W',
    },
    'f': {
      0: -1,
      1: 0,
      direction: 'W',
    },
    'l': {
      0: 0,
      1: 0,
      direction: 'S',
    },
    'r': {
      0: 0,
      1: 0,
      direction: 'N',
    },
  },
}

function isPositionObstacolated(position, obstacles) {
  if (!obstacles) {
    return false
  }
  return obstacles.filter(obstacle => obstacle[0]===position[0] && obstacle[1]===position[1]).length > 0
}

function normalizeCoordinate(infinteCoordinate, maxCoordinate) {
  if (infinteCoordinate <= maxCoordinate && infinteCoordinate >= -maxCoordinate) {
    return infinteCoordinate
  }
  if (infinteCoordinate > maxCoordinate) {
    return -maxCoordinate
  }
  if (infinteCoordinate < -maxCoordinate) {
    return maxCoordinate
  }
}

function move({ startingPosition, startingDirection, commands, grid, obstacles }) {
  if (!grid) {
    grid = [+Infinity, +Infinity]
  }
  if (commands.length === 0) {
    return [startingPosition, startingDirection]
  }
  const newUnboundedPosition = []
  newUnboundedPosition[0] = startingPosition[0] + incrementMap[startingDirection][commands[0]][0]
  newUnboundedPosition[1] = startingPosition[1] + incrementMap[startingDirection][commands[0]][1]
  let newPosition = []
  newPosition[0] = normalizeCoordinate(newUnboundedPosition[0], grid[0])
  newPosition[1] = normalizeCoordinate(newUnboundedPosition[1], grid[1])
  if (isPositionObstacolated(newPosition, obstacles)) {
    newPosition = startingPosition
  }
  const newDirection = incrementMap[startingDirection][commands[0]].direction
  return move({ startingPosition: newPosition, startingDirection: newDirection, commands: commands.slice(1), grid, obstacles })
}

module.exports = move