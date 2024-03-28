import PropTypes from 'prop-types'
import './TodoButton.css'

const TodoButton = ({ children, buttonStyle, handleClick }) => {
    return (
        <button className={`todo-button ${buttonStyle}`} onClick={handleClick}>
            {children}
        </button>
    )
}

TodoButton.propTypes = {
    children: PropTypes.node.isRequired,
    buttonStyle: PropTypes.string,
    handleClick: PropTypes.func
}

export default TodoButton