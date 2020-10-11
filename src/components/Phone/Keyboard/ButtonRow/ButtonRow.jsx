import React from 'react'

import Button from '../Button'

import propTypes from 'prop-types'

import './buttonRow.scss'

export default function ButtonRow({
  buttonLabels,
  variant,
}) {
  return (
    <div className="button-row">
      {
        variant === 'bottom' ? (
          <>
            <Button variant="round-bottom-left">
              {buttonLabels[0]}
            </Button>
            <Button>{buttonLabels[1]}</Button>
            <Button variant="round-bottom-right">
              {buttonLabels[2]}
            </Button>
          </>
        ) : (
          buttonLabels.map((label, i) => (
            <Button key={Math.random()}>
              {label}
            </Button>
          ))
        )
      }
    </div>
  )
}

ButtonRow.propTypes = {
  buttonLabels: propTypes.oneOfType([
    propTypes.node,
    propTypes.string
  ]),
  variant: propTypes.string,
}

ButtonRow.defaultProps = {
  buttonLabels: [],
  variant: '',
}
