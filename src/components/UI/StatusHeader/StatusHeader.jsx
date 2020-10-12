import React from 'react'

import './statusHeader.scss'
export default function StatusHeader({statuses, time}) {
  return (
    <div className="status-header">
      <div className="icons">
        {statuses.map(status => (
          status.icon
        ))}
      </div>
      <div className="time">
        {time}
      </div>
    </div>
  )
}

StatusHeader.defaultProps = {
  statuses: [],
  time: '12:51'
}
