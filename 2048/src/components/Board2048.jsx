import { useState, useCallback, useEffect } from "react"
import PropTypes from "prop-types"
import Cell2048 from "./Cell2048"
import { VALID_SIZES, DIRECTIONS } from "../constants.js"
import { updateBoard } from "../logic/board2048.js"

function Board2048({ size }) {
  const boardSize = VALID_SIZES.includes(size) ? size : 4
  const firstBoard = updateBoard(Array(boardSize).fill(Array(boardSize).fill(0)), null)
  const [board, setBoard] = useState(firstBoard)

  const handleKeyDown = useCallback((event) => {
    event.preventDefault()
    
    console.log(event.key)
    // switch (event.key) {
    //   case "ArrowUp":
    //     setBoard(updateBoard(board, "up"))
    //     break
    //   case "ArrowDown":
    //     setBoard(updateBoard(board, "down"))
    //     break
    //   case "ArrowLeft":
    //     setBoard(updateBoard(board, "left"))
    //     break
    //   case "ArrowRight":
    //     setBoard(updateBoard(board, "right"))
    //     break
    //   default:
    //     break
    // }
  }, [board, setBoard])

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])


  return (
    <section className="board-2048">
      {
        board.map((i, j) => {
          return (
            <div key={j} className="row-2048">
              {
                i.map((k, l) => <Cell2048 key={l} value={k} />)
              }
            </div>
          )
        })
      }
    </section>
  )
}

Board2048.propTypes = {
  size: PropTypes.number,
}

export default Board2048
