import { useState, useEffect } from 'react'
import Todo from './components/Todo.jsx'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))

    if (storedTodos) {
      setTodos(storedTodos)
    }
  }, [])

  const addTodo = (todo) => {
    setTodos([...todos, todo])
    localStorage.setItem('todos', JSON.stringify([...todos, todo]))
  }

  const removeTodo = () => {
    setTodos(todos.slice(0, -1))
    localStorage.setItem('todos', JSON.stringify(todos.slice(0, -1)))
  }

  return (
    <>
      <h1>Todo App</h1>
      <button onClick={removeTodo}>Remove</button>
      <form
        onSubmit = { (e) => {
          e.preventDefault()
          addTodo({
            id: todos.length + 1,
            title: e.target.elements.todo.value,
          })
          e.target.reset()
        }}
      >
        <input type="text" name="todo" />
        <button type="submit" >Add</button>
      </form>

      <section>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo.title}/>
        ))}
      </section>
    </>
  )
}

export default App
