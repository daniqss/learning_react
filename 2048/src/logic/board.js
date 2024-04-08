export const update = (board, getDirection) => {
  const updatedBoard = board.map((i) => i)

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 0) continue

      let x = i
      let y = j
      let nextX = x
      let nextY = y

      while (true) {
        ;({ i: nextX, j: nextY } = getDirection(x, y))

        if (
          nextX < 0 ||
          nextX >= board.length ||
          nextY < 0 ||
          nextY >= board.length
        )
          break
        console.log('nextX:', nextX)
        console.log('nextY:', nextY)
        console.log('board[nextX][nextY]:', board[nextX][nextY])
        if (board[nextX][nextY] === 0) {
          updatedBoard[nextX][nextY] = board[x][y]
          updatedBoard[x][y] = 0
        } else if (board[nextX][nextY] === board[x][y]) {
          updatedBoard[nextX][nextY] *= 2
          updatedBoard[x][y] = 0
        } else break

        x = nextX
        y = nextY
      }
    }
  }

  const emptyCells = findEmptyCells(updatedBoard)
  return addNewCell(emptyCells, updatedBoard, false)
}

export const restart = (board) => {
  const emptyCells = findEmptyCells(board)
  return addNewCell(emptyCells, board, true)
}

const addNewCell = (emptyCells, board, restartingBoard) => {
  const { x, y } = emptyCells[Math.floor(Math.random() * emptyCells.length)]

  return board.map((row, i) =>
    row.map((element, j) => {
      if (x === i && y === j) return 2
      if (restartingBoard === true) return 0
      return element
    })
  )
}

const findEmptyCells = (board) => {
  const emptyCells = []

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 0) emptyCells.push({ x: i, y: j })
    }
  }

  return emptyCells
}
