import React from 'react'

import './actionFooter.scss'
export default function ActionFooter({
  leftOptionName,
  rightOptionName,
}) {
  return (
    <div className="action-footer">
      <span>{leftOptionName}</span>
      <span>{rightOptionName}</span>
    </div>
  )
}

ActionFooter.defaultProps = {
  leftOptionName: 'leftop',
  rightOptionName: ''
}
