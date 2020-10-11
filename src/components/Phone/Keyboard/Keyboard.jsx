import React from 'react'
import ButtonRow from './ButtonRow'

import './keyboard.scss'

export default function Keyboard() {
  return (
    <div className="keyboard">
      <div className="upper-buttons">
        <ButtonRow 
          buttonLabels={[
            '—', '^', '—'
          ]}
        />
        <ButtonRow 
          buttonLabels={[
            'c', 'v', 'h'
          ]}
        />
      </div>
      <div className="number-buttons">
        <ButtonRow 
          buttonLabels={[
            '1', '2', '3'
          ]}
        />
        <ButtonRow 
          buttonLabels={[
            '4', '5', '6'
          ]}
        />
        <ButtonRow 
          buttonLabels={[
            '7', '8', '9'
          ]}
        />
        <ButtonRow 
          buttonLabels={[
            '*', '0', '#'
          ]}
          variant="bottom"
        />
      </div>
    </div>
  )
}
