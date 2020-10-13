import React from 'react'

import './alertFullScreen.scss'
export default function AlertFullScreen({
  text,
  icon,
}) {
  return (
    <div className="alert-full-screen">
      <div>{text}</div>
      <div>{icon}</div>
    </div>
  )
}
