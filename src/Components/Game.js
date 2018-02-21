import React, { Component } from 'react'

class Game extends Component {

  constructor() {
    super()
    this.state = {
      previousScore: 0,
      score: 0
    }
  }

  render() {
    return (
      <p>This is {this.state.score} the game</p>
    )
  }
}

export default Game
