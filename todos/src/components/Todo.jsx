import PropTypes from 'prop-types';
import './Todo.css';

export default function Todo({ todo }) {

    return (
        <section>
                <p>{todo}</p>
        </section>
    )
}
Todo.propTypes = {
    todo: PropTypes.string.isRequired,
}