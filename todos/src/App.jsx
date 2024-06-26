import { useState, useEffect } from 'react'
import TodoList from './components/TodoList.jsx'
import TodoForm from './components/TodoForm.jsx'
import './App.css'
import TodoButton from './components/TodoButton.jsx'

export default function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))

    if (storedTodos) {
      setTodos(storedTodos)
    }
  }, [])

  const removeAllTodos = () => {
    setTodos(todos.filter(() => false))
    localStorage.setItem('todos', JSON.stringify([]))
  }

  const removeTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  }

  const editTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return updatedTodo
      }
      return todo
    })
    setTodos(updatedTodos)
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
  }

  return (
    <>
      <header>
        <h1>Todos</h1>
        <TodoButton handleClick={removeAllTodos} buttonStyle={'remove-button'}>Remove all</TodoButton>
      </header>

      <main>
        <TodoForm setTodos={setTodos} />
        <TodoList todos={todos} editTodo={editTodo} removeTodo={removeTodo} />
      </main>
    </>
  )
}
