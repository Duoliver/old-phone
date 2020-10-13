import React, {useState, useEffect} from 'react'

import ActionFooter from '../../UI/ActionFooter/ActionFooter'
import HomeScreen from '../../UI/HomeScreen/HomeScreen'
import StatusHeader from '../../UI/StatusHeader/StatusHeader'

import moment from 'moment'

import './screen.scss'
import AlertFullScreen from '../../UI/AlertFullScreen/AlertFullScreen'

export default function Screen({children}) {

  const past = 15
  const [datetime, setDatetime] = useState(moment(new Date()).subtract(past, 'years'))
  const [alert, setAlert] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setDatetime(moment(new Date()).subtract(past, 'years'))
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (alert) {
      setTimeout(() => setAlert(false), 2000)
    }
  }, [alert])

  return (
    <div className="screen">
      {!alert ? (
        <div className="ui-container">
          <StatusHeader time={datetime.format('H:mm')} />
          {!children ? (
              <HomeScreen 
                date={datetime.format('DD-MM-yyyy')} 
              />
            ) : (
              children
          )}
          <ActionFooter 
            leftOptionName={children ? 'Voltar' : 'Menu'}
            rightOptionName={children ? 'Apagar' : 'Contatos'}
          />
        </div>
      ) : (
        <div className="alert-container">
          <AlertFullScreen
            text="Apenas chamadas de emergência"
            icon="[!]"
          />
        </div>
      )}
    </div>
  )
}
