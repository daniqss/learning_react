import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Data2048 from './Data2048'
import Button2048 from './Button2048'
import Board2048 from './Board2048'

function Game2048({ boardSize }) {
  const [score, setScore] = useState(0)
  const [lastScore, setLastScore] = useState(0)
  const [lastIsUndo, setLastIsUndo] = useState(true)
  const [personalBest, setPersonalBest] = useState(0)

  useEffect(() => {
    const storedPersonalBest = JSON.parse(
      window.localStorage.getItem('personalBest')
    )

    if (storedPersonalBest) {
      setPersonalBest(storedPersonalBest)
    }
  }, [])

  const restartGame = () => {
    const newScore = 0
    setScore(newScore)
  }

  const undoMovement = () => {}

  return (
    <section className='container-2048'>
      <header className='header-2048'>
        <h1>2048</h1>
        <div style={{ float: 'left', margin: '10px 0 0 0' }}>
          <Data2048 title='Score'>{score}</Data2048>
          <Data2048 title='Best'>{personalBest}</Data2048>
        </div>
      </header>
      <section>
        <Button2048 onClick={restartGame}>Restart</Button2048>
        {lastIsUndo ? (
          <Button2048 onClick={undoMovement}>Undo</Button2048>
        ) : null}
      </section>
      <Board2048
        size={boardSize}
        updateGame={(points) => {
          if (points === null) {
            const newScore = lastScore
            setScore(newScore)
          } else {
            const newScore = score + points
            setScore(newScore)
            setLastScore(score)
            setLastIsUndo(false)
          }
        }}
      />
    </section>
  )
}

Game2048.propTypes = {
  boardSize: PropTypes.number.isRequired
}

export default Game2048
