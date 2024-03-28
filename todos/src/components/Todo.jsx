import PropTypes from 'prop-types';
import TodoButton from './TodoButton';
import './Todo.css';

export default function Todo({ todo, onRemove }) {

    return (
        <section className='todo-card'>
            <p>{todo}</p>
            <div>
                <TodoButton buttonStyle='edit-button'>Edit</TodoButton>
                <TodoButton buttonStyle='remove-button' handleClick={onRemove}>Delete</TodoButton>
            </div>
        </section>
    )
}

Todo.propTypes = {
    todo: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
}