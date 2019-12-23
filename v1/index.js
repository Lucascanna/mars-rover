const movementsMap = require('./lib/movementsMap')

function isPositionObstacolated(position, obstacles) {
  if (!obstacles) {
    return false
  }
  return obstacles.filter(obstacle => obstacle[0]===position[0] && obstacle[1]===position[1]).length > 0
}

function normalizeCoordinate(unboundedCoordinate, maxCoordinate) {
  if (unboundedCoordinate > maxCoordinate) {
    return -maxCoordinate
  }
  if (unboundedCoordinate < -maxCoordinate) {
    return maxCoordinate
  }
  return unboundedCoordinate
}

function move({ startingPosition, startingDirection, commands, grid, obstacles }) {
  if (!grid) {
    grid = [+Infinity, +Infinity]
  }
  if (commands.length === 0) {
    return [startingPosition, startingDirection]
  }
  const newUnboundedPosition = []
  newUnboundedPosition[0] = startingPosition[0] + movementsMap[startingDirection][commands[0]][0]
  newUnboundedPosition[1] = startingPosition[1] + movementsMap[startingDirection][commands[0]][1]
  let newPosition = []
  newPosition[0] = normalizeCoordinate(newUnboundedPosition[0], grid[0])
  newPosition[1] = normalizeCoordinate(newUnboundedPosition[1], grid[1])
  if (isPositionObstacolated(newPosition, obstacles)) {
    newPosition = startingPosition
  }
  const newDirection = movementsMap[startingDirection][commands[0]].direction
  return move({ startingPosition: newPosition, startingDirection: newDirection, commands: commands.slice(1), grid, obstacles })
}

module.exports = move