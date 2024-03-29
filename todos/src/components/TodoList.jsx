import PropTypes from "prop-types";
import Todo from "./Todo.jsx";
// import "./TodoList.css";

export default function TodoList({ todos, editTodo, removeTodo }) {
  return (
    <>
      <section>
        {todos.map((todo) => {
          if (!todo.completed) {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                handleCheck={(updatedTodo) => editTodo(todo.id, updatedTodo)}
                handleEdit={(updatedTodo) => editTodo(todo.id, updatedTodo)}
                handleRemove={() => removeTodo(todo.id)}
              />
            );
          }
        })}
      </section>
      <section>
        {todos.map((todo) => {
          if (todo.completed) {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                handleCheck={(updatedTodo) => editTodo(todo.id, updatedTodo)}
                handleEdit={(updatedTodo) => editTodo(todo.id, updatedTodo)}
                handleRemove={() => removeTodo(todo.id)}
              />
            );
          }
        })}
      </section>
    </>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  editTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};
