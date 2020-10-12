import React from 'react'
import ActionFooter from '../../UI/ActionFooter/ActionFooter'
import HomeScreen from '../../UI/HomeScreen/HomeScreen'
import StatusHeader from '../../UI/StatusHeader/StatusHeader'

import './screen.scss'

export default function Screen({children}) {
  return (
    <div className="screen">
      <div className="ui-container">
        <StatusHeader />
        {!children ? (
            <HomeScreen />
          ) : (
            children
          )}
        <ActionFooter />
      </div>
    </div>
  )
}
