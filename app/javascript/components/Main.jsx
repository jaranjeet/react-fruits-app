import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Main = props => (
  <div>Hello {props.name}!</div>
)

Main.defaultProps = {
  name: 'David'
}

Main.propTypes = {
  name: PropTypes.string
}

export default Main