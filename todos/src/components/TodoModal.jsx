import PropTypes from 'prop-types';
import "./TodoModal.css";

export default function TodoModal({ children, onClose, show }) {
  const handleClose = e => {
    onClose && onClose(e)
  }

  if (!show) {
    return null;
  }
  return (
    <div className="modal">
      <h2>Modal Window</h2>
      <div className="content">{children}</div>
      <div className="actions">
        <button className="toggle-button" onClick={handleClose}>
          close
        </button>
      </div>
    </div>
  )
}

TodoModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.node
}