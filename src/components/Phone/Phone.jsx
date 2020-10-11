import React from 'react'
import Keyboard from './Keyboard'

import './phone.scss'
import Receiver from './Receiver/Receiver'
import Screen from './Screen/Screen'

export default function Phone() {
  return (
    <div className="shell">
      <div className="receiver-container">
        <Receiver/>
      </div>
      <div className="screen-container">
        <div className="screen-border">
          <div className="brand">
            konia
          </div>
          <Screen />
        </div>
      </div>
      <div className="keyboard-container">
        <Keyboard />
      </div>
    </div>
  )
}
