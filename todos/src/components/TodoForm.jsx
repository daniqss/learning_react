import PropTypes from 'prop-types';

const TodoForm = ({ setTodos }) => {
  const addTodo = (todoTitle) => {
    const newTodo = {
      id: (new Date().getTime()).toString(),
      title: todoTitle,
      completed: false
    }

    setTodos(prevTodos => {
      const updatedTodos = [...prevTodos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos))
      return updatedTodos
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const todoTitle = e.target.elements.todo.value
    addTodo(todoTitle)
    e.target.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="todo" />
      <button type="submit">Add</button>
    </form>
  )
}

TodoForm.propTypes = {
    setTodos: PropTypes.func.isRequired,
}

export default TodoForm;
