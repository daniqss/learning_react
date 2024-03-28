import PropTypes from 'prop-types';
import TodoButton from './TodoButton';
import './Todo.css';

export default function Todo({ todo, handleCheck, handleEdit, handleRemove}) {

    return (
        <section className='todo-card'>
            <div className='right-side'>
                <input type='checkbox' className='completedCheck' onClick={handleCheck}/>
                <p>{todo.title}</p>
            </div>
            <div>
                <TodoButton buttonStyle='edit-button' handleClick={handleEdit}>Edit</TodoButton>
                <TodoButton buttonStyle='remove-button' handleClick={handleRemove}>Delete</TodoButton>
            </div>
        </section>
    )
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    handleCheck: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired
}