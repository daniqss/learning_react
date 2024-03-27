import PropTypes from 'prop-types';
import './Todo.css';

export default function Todo({ todo }) {

    return (
        <section>
            {todo.key}
            <h2>{todo}</h2>
        </section>
    )
}

Todo.propTypes = {
    todo: PropTypes.string.isRequired
}