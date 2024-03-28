import { useState, useEffect } from 'react'
import Todo from './components/Todo.jsx'
import TodoForm from './components/TodoForm.jsx'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))

    if (storedTodos) {
      setTodos(storedTodos)
    }
  }, [])

  const removeTodos = () => {
    setTodos(todos.filter(() => false))
    localStorage.setItem('todos', JSON.stringify([]))
  }

  return (
    <>
      <header>
        <h1>Todos</h1>
        <button onClick={removeTodos}>Remove All</button>
      </header>

      <main>
        <TodoForm setTodos={setTodos} />

        <section>
          {todos.map((todo) => (
              <Todo key={todo.id} todo={todo.title} />
          ))}
        </section>
      </main>
    </>
  )
}

export default App
