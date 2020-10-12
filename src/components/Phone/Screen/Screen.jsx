import React, {useState, useEffect} from 'react'

import ActionFooter from '../../UI/ActionFooter/ActionFooter'
import HomeScreen from '../../UI/HomeScreen/HomeScreen'
import StatusHeader from '../../UI/StatusHeader/StatusHeader'

import moment from 'moment'

import './screen.scss'

export default function Screen({children}) {

  const past = 15
  const [datetime, setDatetime] = useState(moment(new Date()).subtract(past, 'years'))

  useEffect(() => {
    const interval = setInterval(() => {
      setDatetime(moment(new Date()).subtract(past, 'years'))
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="screen">
      <div className="ui-container">
        <StatusHeader time={datetime.format('H:mm')} />
        {!children ? (
            <HomeScreen 
              date={datetime.format('DD-MM-yyyy')} 
            />
          ) : (
            children
          )}
        <ActionFooter />
      </div>
    </div>
  )
}
