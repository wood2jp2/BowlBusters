import React, { Component } from 'react'
import Frames from './Frames'

class Game extends Component {

  constructor() {
    super()
    this.state = {
      previousScore: 0,
      score: 0,
      startGame: false
    }
  }

  startGame = e => {
    e.preventDefault()
    this.setState({
      startGame: true
    })
  }

  render() {

    let startButton = <button
      className='startButton'
      onClick={ e => this.startGame(e)}>Start Game</button>

    return(
      <div>
      {this.state.startGame ?
      <Frames /> : startButton}
      <p>Score: {this.state.score}</p>
      <p>Previous Game Score: {this.state.previousScore}</p>
      </div>
    )
  }
}

export default Game
