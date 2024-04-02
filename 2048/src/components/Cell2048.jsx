import PropTypes from "prop-types"
import { CELLS_COLORS } from "../constants.js"

function Cell2048({value}) {
  const valueColor = CELLS_COLORS[value.toString()] || CELLS_COLORS['0']
  const valueStyle = { backgroundColor: valueColor }

  return (
    <div className="cell-2048" style={valueStyle}>
      {value}
    </div>
  )
}


Cell2048.propTypes = {
  value: PropTypes.node.isRequired,
}

export default Cell2048;
2