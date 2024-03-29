import { useState } from 'react'
import PropTypes from 'prop-types'
import "./TodoModal.css";
import TodoButton from './TodoButton'

export default function TodoModal({children, todo, confirmEdit, handleClose }) {
  const [newTitle, setNewTitle] = useState(todo.title);

  return (
    <div className="modal">
      <div onClick={handleClose} className="overlay"></div>
          <div className="modal-content">
            <h2>{todo.title}</h2>
            <div>
              {children}
            </div>
            <input type="text" defaultValue={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
            <div>
              <TodoButton buttonStyle="add-button" handleClick={
                  () => {
                    confirmEdit({ ...todo, title: newTitle })
                    handleClose()
                  }
                }
              >
                Save
              </TodoButton>
              <TodoButton buttonStyle="remove-button" handleClick={handleClose}>
                Cancel
              </TodoButton>
            </div>
          </div>
    </div>
  )
}

TodoModal.propTypes = {
  children: PropTypes.node,
  todo: PropTypes.object.isRequired,
  confirmEdit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired
}