import { useState } from "react"
import PropTypes from "prop-types"
import Cell2048 from "./Cell2048"
import { VALID_SIZES } from "../constants.js"

function Board2048({ size }) {
  const boardSize = VALID_SIZES.includes(size) ? size : 4
  const [board, setBoard] = useState(Array(boardSize).fill(Array(boardSize).fill(0)))


  return (
    <section className="board-2048">
      {
        board.map((i, j) => {
          return (
            <div key={j} className="row-2048">
              {
                i.map((k, l) => <Cell2048 key={l} value={l} />)
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
