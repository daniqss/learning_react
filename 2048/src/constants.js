export const VALID_SIZES = [3, 4, 5, 6]

export const CELLS_COLORS = {
  0: '#cdc1b4',
  2: '#eee4da',
  4: '#ede0c8',
  8: '#f2b179',
  16: '#f59563',
  32: '#f67c5f',
  64: '#F75F3B',
  128: '#edcf72',
  256: '#edcc61',
  512: '#ecc750',
  1024: '#d9b401'
}

export const DIRECTIONS = {
  UP: function up(i, j) {
    return { i: i, j: j - 1 }
  },
  DOWN: function down(i, j) {
    return { i: i, j: j + 1 }
  },
  LEFT: function left(i, j) {
    return { i: i - 1, j: j }
  },
  RIGHT: function right(i, j) {
    return { i: i + 1, j: j }
  }
}

export const keyToDirection = (key) => {
  switch (key) {
    case 'ArrowUp' || 'w':
      return DIRECTIONS.UP
    case 'ArrowDown' || 's':
      return DIRECTIONS.DOWN
    case 'ArrowLeft' || 'a':
      return DIRECTIONS.LEFT
    case 'ArrowRight' || 'd':
      return DIRECTIONS.RIGHT
    default:
      return null
  }
}
