import React, {useState} from 'react'
import metadata from '../../constants/metadata'
import Keyboard from './Keyboard'

import './phone.scss'
import Receiver from './Receiver'
import Screen from './Screen'

export default function Phone() {
  const [number, setNumber] = useState('')
  const [alertMessage, setAlertMessage] = useState('')

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

  const showAlert = (message) => {
    setAlertMessage(message)
  }

  const clearAlert = () => {
    setAlertMessage('')
  }

  return (
    <div className="shell">
      <div className="receiver-container">
        <Receiver/>
      </div>
      <div className="screen-container">
        <div className="screen-border">
          <div className="brand">{metadata.BRAND}</div>
          <Screen
            alertMessage={alertMessage}
            clearAlert={clearAlert}
          >
            {number}
          </Screen>
        </div>
      </div>
      <div className="keyboard-container">
        <Keyboard 
          pressNumber={pressNumber}
          leftAction={number ? goBack : null}
          rightAction={number ? eraseNumber : null}
          showAlert={showAlert}
        />
      </div>
    </div>
  )
}
