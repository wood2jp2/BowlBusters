import React, { Component } from 'react'

class Frames extends Component {

  constructor () {
    super()
    this.state = {
      bonusFrame: false,
      frames: [],
      frameCount: 1
    }
  }

  render() {
    return <p>{this.state.something}</p>
  }

}

export default Frames
