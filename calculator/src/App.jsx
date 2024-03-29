import { useState } from 'react'
import './App.css'

export default function App() {
  const [display, setDisplay] = useState('0')
  const [currentValue, setCurrentValue] = useState('')
  const [operator, setOperator] = useState(null)

  const handleNumber = (number) => {
    console.log('number:', number)
    if (display === '0') {
      setDisplay(number.toString())
    } else {
      setDisplay(display + number)
    }
    console.log('display:', display)
  }

  const handleOperator = (op) => {
    setCurrentValue(display)
    setOperator(op)
    setDisplay('0')
  }

  const handleEqual = () => {
    const num1 = parseFloat(currentValue)
    const num2 = parseFloat(display)
    let result
    switch (operator) {
      case '+':
        result = num1 + num2
        break
      case '-':
        result = num1 - num2
        break
      case '*':
        result = num1 * num2
        break
      case '/':
        result = num1 / num2
        break
      default:
        return
    }
    setDisplay(result.toString())
    setCurrentValue('')
    setOperator(null)
  }

  const handleClear = () => {
    setDisplay('0')
    setCurrentValue('')
    setOperator(null)
  }

  return (
    <>
      {/* <h1>React simple calculator</h1> */}
      <div className="calculator">
        <div type="text" className="calculator-screen">
          {display}
        </div>
        <div className='calculator-keys'>
          <div className="calculator-numbers">
            <button className="numbers" onClick={() => handleNumber('7')}>7</button>
            <button className="numbers" onClick={() => handleNumber('8')}>8</button>
            <button className="numbers" onClick={() => handleNumber('9')}>9</button>
            <button className="numbers" onClick={() => handleNumber('4')}>4</button>
            <button className="numbers" onClick={() => handleNumber('5')}>5</button>
            <button className="numbers" onClick={() => handleNumber('6')}>6</button>
            <button className="numbers" onClick={() => handleNumber('1')}>1</button>
            <button className="numbers" onClick={() => handleNumber('2')}>2</button>
            <button className="numbers" onClick={() => handleNumber('3')}>3</button>
            <button className="numbers" onClick={() => handleNumber('0')}>0</button>
            <button className="all-clear" onClick={() => handleClear()}>AC</button>
            <button className="equal-sign" onClick={() => handleEqual()}> = </button>
          </div>
          <div className='calculator-operators'>
            <button className="operator" onClick={() => handleOperator('+')}> + </button>
            <button className="operator" onClick={() => handleOperator('-')}> - </button>
            <button className="operator" onClick={() => handleOperator('*')}>&times;</button>
            <button className="operator" onClick={() => handleOperator('/')}>&divide;</button>

          </div>
        </div>
      </div>
    </>
  )
}
