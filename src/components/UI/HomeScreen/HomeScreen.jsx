import React from 'react'

import metadata from '../../../constants/metadata'

import './homeScreen.scss'
export default function HomeScreen() {
  return (
    <div className="homescreen">
      <span>{metadata.PROVIDER}</span>
      <span>11-10-2005</span>
    </div>
  )
}
