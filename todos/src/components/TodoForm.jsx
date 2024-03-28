import PropTypes from 'prop-types';
import TodoButton from './TodoButton';

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
    
    if (!todoTitle) {
      blankTodoAlert()
      return
    }
    addTodo(todoTitle)
    e.target.reset()
  }

  const blankTodoAlert = () => {
    alert('Please enter a todo')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="todo" />
      <TodoButton buttonStyle={'add-button'} >Add</TodoButton>
    </form>
  )
}

TodoForm.propTypes = {
  setTodos: PropTypes.func.isRequired,
}

export default TodoForm;
