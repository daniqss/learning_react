import PropTypes from "prop-types"
import './2048.css'

function Button2048({children, onClick}) {
    return (
        <button className='button-2048' onClick={onClick}>
            {children}
        </button>
    )
} 

Button2048.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button2048
