import PropTypes from 'prop-types'

function Data2048({ title, children }) {
  return (
    <div className='data-2048 info-2048'>
      <span>{title}</span>
      {children}
    </div>
  )
}

Data2048.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Data2048
