import React, { Component } from 'react'

class Frames extends Component {

  constructor () {
    super()
    this.state = {
      bonusFrame: false,
      scores: [['12', '21'], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['','']],
      frames: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      frameCount: 10
    }
  }

  addScores = (e, i) => {
    e.preventDefault()
    let currentFrame = this.state.scores[e.target.name]
    currentFrame[i-1] = e.target.value
    let replaceFrameInState = this.state.scores.splice(e.target.name, 1, currentFrame)
    // this.setState({
    //   scores: e.target.value
    // })

    console.log(this.state.scores)
  }

  render() {

    let output = this.state.frames.map( (x, i) => {
      return (
        <div id={i} key={i}>
          <p>Frame {i+1}</p>
          <input
            name={i}
            maxLength={1}
            ref={1}
            onChange={ e => this.addScores(e, 1)}>
            </input>
          <input
            name={i}
            maxLength={1}
            ref={2}
            onChange={ e => this.addScores(e, 2)}>
            </input>
        </div>
      )
    })

    return output

  }
}

export default Frames
