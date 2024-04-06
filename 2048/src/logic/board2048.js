export const updateBoard = (board, event) => {
  if (event === null)
    return board.map((i) => i.map(() => Math.floor(Math.random() * 2)))

  return board.map((i) => i.map(() => {
    return null
  }))
}
