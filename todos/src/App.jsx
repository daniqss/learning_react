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

  const removeTodo = () => {
    setTodos(todos.slice(0, -1))
    const localTodos = JSON.parse(localStorage.getItem('todos'))
    const updatedTodos = localTodos.slice(0, -1)
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
  }

  return (
    <>
      <h1>Todo App</h1>
      <button onClick={removeTodo}>Remove</button>

      <TodoForm setTodos={setTodos} />

      <section>
        {todos.map((todo) => (
            <Todo key={todo.id} todo={todo.title} />
        ))}
      </section>
    </>
  )
}

export default App
