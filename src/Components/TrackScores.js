import React, { Component } from 'react'
import styled from 'styled-components'

let TrackScores = props => {

  const ScoreDisplay = styled.div`
    color: ${props.score >= 200 ? 'green' : props.score >=100 ? 'blue' : 'red'};
    font-weight: bolder;
    font-size: 30px
  `

  return (
    <ScoreDisplay>
      {props.score ? <p>Total Score: {props.score}</p> : null}
    </ScoreDisplay>
  )
}

export default TrackScores
