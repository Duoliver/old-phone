import React from 'react'
import Keyboard from './Keyboard'

import './phone.scss'

export default function Phone() {
  return (
    <div className="shell">
      <div className="earthing-container">

      </div>
      <div className="screen-container">

      </div>
      <div className="keyboard-container">
        <Keyboard />
      </div>
    </div>
  )
}
