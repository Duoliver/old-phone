import React from 'react'

import propTypes from 'prop-types'

import './button.scss'

export default function Button({
  children,
  variant
}) {
  return (
  <button>{children}</button>
  )
}

Button.propTypes = {
  variant: propTypes.string,
  children: propTypes.oneOf([
    propTypes.node,
    propTypes.string
  ]),
}

Button.defaultProps = {
  variant: '',
  children: ''
}