import React, { Component } from 'react'

class Frames extends Component {

  constructor () {
    super()
    this.state = {
      bonusFrame: false,
      scores: [[], [], [], [], [], [], [], [], [], []],
      frameCount: 10
    }
  }

  addScores = e => {
    e.preventDefault()

  }

  render() {

    let output = this.state.scores.map( (x, i) => {
      return (
        <div key={i}>
          <p>Frame {i+1}</p>
          <input
            name='roll'
            value={this.state.scores[i][0]}
            onChange={ e => this.addScores(e)}>
            </input>
          <input
            name='roll'
            value={this.state.scores[i][1]}
            onChange={ e => this.addScores(e)}>
            </input>
        </div>
      )
    })

    return output

  }
}

export default Frames
