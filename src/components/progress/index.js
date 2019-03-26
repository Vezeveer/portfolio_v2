import React from 'react'
import './progress.css'

export default ({ name, percent, color }) => {
  return (
    <div className="progress mb-1">
      <div className="progress-bar bg-primary"
        style={{
          'width': percent + '%'
        }}
      >{name} {percent}%</div>
    </div>
  )
}
