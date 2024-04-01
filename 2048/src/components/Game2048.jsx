import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Data2048 from "./Data2048"
import Button2048 from "./Button2048"
import Board2048 from "./Board2048"

function Game2048({ boardSize }) {
  const [score, setScore] = useState(0)
  const [personalBest, setPersonalBest] = useState(0)

  useEffect(() => {
    const storedPersonalBest = JSON.parse(localStorage.getItem('personalBest'))

    if (storedPersonalBest) {
      setPersonalBest(storedPersonalBest)
    }
  }, [])

  const restartGame = () => {
    const newScore = 0
    setScore(newScore)
    // TODO -> Restart board 
  }

  const undoMovement = () => {
    // TODO -> Undo last movement
  }

  return (
    <section>
        <div>
            <h1>2048</h1>
            <Data2048 title='Score'>{score}</Data2048>
            <Data2048 title='Best'>{personalBest}</Data2048>
        </div>
        <div>
            <Button2048 onClick={restartGame}>Restart</Button2048>
            <Button2048 onClick={undoMovement}>Undo</Button2048>
        </div>
        <Board2048 size={boardSize}/>
    </section>
  );
}

Game2048.propTypes = {
  boardSize: PropTypes.number.isRequired
}

export default Game2048;
