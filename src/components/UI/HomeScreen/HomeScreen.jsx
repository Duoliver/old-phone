import React from 'react'

import metadata from '../../../constants/metadata'

import './homeScreen.scss'
export default function HomeScreen({date}) {
  return (
    <div className="homescreen">
      <span>{metadata.PROVIDER}</span>
      <span>{date}</span>
    </div>
  )
}
