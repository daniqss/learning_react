import PropTypes from 'prop-types';
import './Todo.css';

export default function Todo({ todo }) {

    return (
        <section className='todo-card'>
            <p>{todo}</p>
            <div>
                <button>Edit</button>
                <button>Remove</button>
            </div>
        </section>
    )
}

Todo.propTypes = {
    todo: PropTypes.string.isRequired,
}