import React, { Component } from 'react'
import Frames from './Frames'

class Game extends Component {

  constructor() {
    super()
    this.state = {
      startGame: false
    }
  }

  startGame = e => {
    e.preventDefault()
    this.setState({
      startGame: true
    })
  }

  resetGame = e => {
    e.preventDefault()
    this.setState({
      startGame: false
    })
  }

  setUsername = e => {
    this.setState({
      username: e.target.value
    })
  }

  render() {

    let startButton = <button
      className='startButton'
      onClick={ e => this.startGame(e)}>Start Game</button>

    let resetButton = <button
      className='resetButton'
      onClick={ e => {this.resetGame(e)}}>Reset Game</button>

    let userInput = <input
      className='setUsername'
      placeholder='Enter Your Name!'
      onChange={ e => this.setUsername(e)}></input>

    return(
      <div>
      {this.state.startGame ? resetButton : userInput}
      {this.state.startGame ? <Frames username={this.state.username}/> : startButton}
      </div>
    )
  }
}

export default Game
