import { useState } from "react"
import PropTypes from "prop-types"

function Board2048({ size }) {
  const VALID_SIZES = [3, 4, 5, 6];
  const boardSize = VALID_SIZES.includes(size) ? size : 4
  const [board, setBoard] = useState(Array(boardSize).fill(Array(boardSize).fill(0)))


  return (
    <section className="board-2048">
      {
        board.map((i, j) => {
          return (
            <div key={j} className="row-2048">
              {
                i.map((k, l) => {
                  return (
                    <div key={l} className="cell-2048">
                      {k}
                    </div>
                  )
                })
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
};

export default Board2048
