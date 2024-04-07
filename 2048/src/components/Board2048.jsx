import { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import Cell2048 from './Cell2048'
import { VALID_SIZES, keyToDirection } from '../constants.js'
import { update, restart } from '../logic/board.js'

function Board2048({ size, updateGame }) {
  const boardSize = VALID_SIZES.includes(size) ? size : 4

  const initialBoard = Array(boardSize).fill(Array(boardSize).fill(0))

  const firstBoard = restart(initialBoard)
  const [board, setBoard] = useState(firstBoard)
  const [lastBoard, setLastBoard] = useState(null)

  const handleKeyDown = useCallback(
    (event) => {
      event.preventDefault()

      const direction = keyToDirection(event.key)
      if (direction !== null) {
        const currentBoard = board
        const newBoard = update(currentBoard, direction)

        console.log(newBoard)

        setBoard(newBoard)
        setLastBoard(currentBoard)
      }
    },
    [board]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  const restartBoard = () => {
    const newBoard = restart(initialBoard)
    setBoard(newBoard)
  }

  const undoBoard = () => {
    const newBoard = lastBoard
    setBoard(newBoard)
    updateGame(null)
  }

  return (
    <section className='board-2048'>
      {board.map((row, i) => {
        return (
          <div key={i} className='row-2048'>
            {row.map((element, j) => {
              return <Cell2048 key={j} value={element} />
            })}
          </div>
        )
      })}
    </section>
  )
}

Board2048.propTypes = {
  size: PropTypes.number,
  updateGame: PropTypes.func.isRequired
}

export default Board2048
