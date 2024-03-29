import { useState } from "react";
import PropTypes from "prop-types";
import TodoButton from "./TodoButton";
import TodoModal from "./TodoModal"; // Importa el componente TodoModal
import "./Todo.css";

export default function Todo({ todo, handleCheck, handleEdit, handleRemove }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
      setModal(!modal);
  };

  if(modal) {
      document.body.classList.add('active-modal')
  } else {
      document.body.classList.remove('active-modal')
  }

  const handleEditClick = () => {
    toggleModal()
  }

  return (
    <>
      <section className="todo-card">
        <div className="right-side">
          <input
            type="checkbox"
            defaultChecked={todo.completed}
            className="completedCheck"
            onClick={() => handleCheck({ ...todo, completed: !todo.completed })}
          />
          <p>{todo.title}</p>
        </div>
        <div>
          <TodoButton buttonStyle="edit-button" handleClick={handleEditClick}>
            Edit
          </TodoButton>
          <TodoButton buttonStyle="remove-button" handleClick={handleRemove}>
            Delete
          </TodoButton>
        </div>
      </section>
      {modal && (
        <TodoModal 
          todo={todo}
          confirmEdit={handleEdit}
          handleClose={toggleModal}
        >
          
        </TodoModal>
      )}
    </>
  );
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  handleCheck: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};
