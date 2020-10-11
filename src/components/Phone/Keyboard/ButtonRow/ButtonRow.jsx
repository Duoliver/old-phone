import React from 'react'

import Button from '../Button'

import propTypes from 'prop-types'

import './buttonRow.scss'

export default function ButtonRow({
  buttons,
  buttonLabels, //deprecated
  variant,
}) {
  return (
    <div className="button-row">
      {
        variant === 'bottom' ? (
          <>
            <Button
              action={buttons[0].action}
              variant="round-bottom-left"
            >
              {buttons[0].label}
            </Button>
            <Button
              action={buttons[1].action}
            >
              {buttons[1].label}
            </Button>
            <Button
              variant="round-bottom-right"
              action={buttons[2].action}
            >
              {buttons[2].label}
            </Button>
          </>
        ) : (
          buttons.map((but) => (
            <Button 
              action={but.action}
              key={Math.random()}
            >
              {but.label}
            </Button>
          ))
        )
      }
    </div>
  )
}

ButtonRow.propTypes = {
  buttons: propTypes.arrayOf(propTypes.object),
  buttonLabels: propTypes.oneOfType([
    propTypes.node,
    propTypes.string
  ]),
  variant: propTypes.string,
}

ButtonRow.defaultProps = {
  buttons: [],
  buttonLabels: [],
  variant: '',
}
