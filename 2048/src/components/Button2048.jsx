import PropTypes from "prop-types"

function Button2048({children, onClick}) {
    return (
        <button className='data-2048 info-2048' onClick={onClick}>
            {children}
        </button>
    )
} 

Button2048.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button2048
