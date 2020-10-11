import React from 'react'
import ButtonRow from './ButtonRow'

import './keyboard.scss'

export default function Keyboard({
  pressNumber
}) {
  return (
    <div className="keyboard">
      <div className="upper-buttons">
        <ButtonRow
          buttons={[
            { label: '—' },
            { label: 'up' },
            { label: '—' },
          ]}
        />
        <ButtonRow 
          buttons={[
            { label: 'call' },
            { label: 'down' },
            { label: 'hang' },
          ]}
        />
      </div>
      <div className="number-buttons">
        <ButtonRow
          buttons={[
            { label: '1', action: () => pressNumber(1) },
            { label: '2', action: () => pressNumber(2) },
            { label: '3', action: () => pressNumber(3) },
          ]}
        />
        <ButtonRow
          buttons={[
            { label: '4', action: () => pressNumber(4) },
            { label: '5', action: () => pressNumber(5) },
            { label: '6', action: () => pressNumber(6) },
          ]}
        />
        <ButtonRow 
          buttons={[
            { label: '7', action: () => pressNumber(7) },
            { label: '8', action: () => pressNumber(8) },
            { label: '9', action: () => pressNumber(9) },
          ]}
        />
        <ButtonRow 
          buttons={[
            { label: '*', action: () => pressNumber('*') },
            { label: '0', action: () => pressNumber(0) },
            { label: '#', action: () => pressNumber('#') },
          ]}
          variant="bottom"
        />
      </div>
    </div>
  )
}
