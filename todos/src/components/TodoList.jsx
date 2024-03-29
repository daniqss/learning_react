import PropTypes from "prop-types";
import Todo from "./Todo.jsx";
import "./TodoList.css";

export default function TodoList({ todos, editTodo, removeTodo }) {
  return (
    <>
      <h2>Active</h2>
      <section>
        {todos.map((todo) => {
          if (!todo.completed) {
            return (
              <div key={todo.id} className="todo">
                <Todo
                  todo={todo}
                  handleCheck={(updatedTodo) => editTodo(todo.id, updatedTodo)}
                  handleEdit={(updatedTodo) => editTodo(todo.id, updatedTodo)}
                  handleRemove={() => removeTodo(todo.id)}
                />
              </div>
            );
          }
        })}
      </section>
      <h2>Completed</h2>
      <section>
        {todos.map((todo) => {
          if (todo.completed) {
            return (
              <div key={todo.id} className="todo">
                <Todo
                  key={todo.id}
                  todo={todo}
                  handleCheck={(updatedTodo) => editTodo(todo.id, updatedTodo)}
                  handleEdit={(updatedTodo) => editTodo(todo.id, updatedTodo)}
                  handleRemove={() => removeTodo(todo.id)}
                />
              </div>
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
