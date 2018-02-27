import React, { Component } from 'react'
import Frames from './Frames'
import styled from 'styled-components'
import styles from './Styles'

const StartAndReset = styled.button`
  ${styles.Button}
`

const Username = styled.input`
  padding: 10px;
  font-size: 18px;
  border-radius: 8px
`

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

    let startButton = <StartAndReset
      className='startButton'
      onClick={ e => this.startGame(e)}>Start Game</StartAndReset>

    let resetButton = <StartAndReset
      className='resetButton'
      onClick={ e => this.resetGame(e)}>Reset Game</StartAndReset>

    let userInput = <Username
      className='setUsername'
      placeholder='Enter Your Name!'
      onChange={ e => this.setUsername(e)}></Username>

    return(
      <div>
      {this.state.startGame ? resetButton : userInput}
      {this.state.startGame ? <Frames username={this.state.username}/> : startButton}
      </div>
    )
  }
}

export default Game
