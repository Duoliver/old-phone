import React, {useState} from 'react'
import Keyboard from './Keyboard'

import './phone.scss'
import Receiver from './Receiver'
import Screen from './Screen'

export default function Phone() {
  const [number, setNumber] = useState('')

  const pressNumber = (num) => {
    const pressed = String(num)
    setNumber(number + pressed)
  }

  const eraseNumber = () => {
    setNumber(number.slice(0, -1))
  }

  const goBack = () => {
    setNumber('')
  }

  return (
    <div className="shell">
      <div className="receiver-container">
        <Receiver/>
      </div>
      <div className="screen-container">
        <div className="screen-border">
          <div className="brand">konia</div>
          <Screen>{number}</Screen>
        </div>
      </div>
      <div className="keyboard-container">
        <Keyboard 
          pressNumber={pressNumber}
          leftAction={number ? goBack : null}
          rightAction={number ? eraseNumber : null}
        />
      </div>
    </div>
  )
}
