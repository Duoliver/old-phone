import React from 'react'
import ButtonRow from './ButtonRow'

import './keyboard.scss'

export default function Keyboard() {
  return (
    <div className="keyboard">
      <div className="upper-buttons">
        <ButtonRow 
          buttonLabels={[
            '—', 'up', '—'
          ]}
        />
        <ButtonRow 
          buttonLabels={[
            'call', 'down', 'hang'
          ]}
        />
      </div>
      <div className="number-buttons">
        <ButtonRow 
          buttonLabels={[
            '1.', '2abc', '3def'
          ]}
        />
        <ButtonRow 
          buttonLabels={[
            '4ghi', '5jkl', '6mno'
          ]}
        />
        <ButtonRow 
          buttonLabels={[
            '7pqrs', '8tuv', '9wxyz'
          ]}
        />
        <ButtonRow 
          buttonLabels={[
            '*', '0_', '#'
          ]}
          variant="bottom"
        />
      </div>
    </div>
  )
}
