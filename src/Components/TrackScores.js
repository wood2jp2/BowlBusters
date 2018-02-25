import React, { Component } from 'react'

let TrackScores = props => {
  return (
    <div>
      {props.score ? <p>Total Score: {props.score}</p> : null}
    </div>
  )
}

export default TrackScores
