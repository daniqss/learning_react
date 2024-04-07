export const update = (board, getDirection) => {
  const movementResult = {
    updatedBoard: board,
    movementPoints: 0
  }

  board.map((row, i) =>
    row.map((element, j) => {
      if (element === 0) return element

      let x = i
      let y = j
      let { i: nextX, j: nextY } = getDirection(x, y)

      if (
        nextX < 0 ||
        nextX >= board.length ||
        nextY < 0 ||
        nextY >= board.length
      ) {
        return element
      }

      if (board[nextX][nextY] === 0) {
        board[nextX][nextY] = element
        board[x][y] = 0
        movementResult.updatedBoard = board
      } else if (board[nextX][nextY] === element) {
        board[nextX][nextY] = element * 2
        board[x][y] = 0
        movementResult.movementPoints += element * 2
        movementResult.updatedBoard = board
      }

      return element
    })
  )
}

export const restart = (board) => {
  const x = Math.floor(Math.random() * board.length)
  const y = Math.floor(Math.random() * board.length)

  return board.map((row, i) =>
    row.map((element, j) => {
      if (x === i && y === j) return 2
      return 0
    })
  )
}
