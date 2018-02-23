import React, { Component } from 'react'

class Frames extends Component {

  constructor () {
    super()
    this.state = {
      bonusFrame: false,
      scores: [['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', '']],
      frames: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      frameCount: 11,
      totalScore: 0
    }
  }

  addScores = (e, i) => {
    e.preventDefault()
    let mockState = [...this.state.scores]
    let currentFrame = mockState[e.target.name]
    currentFrame[i-1] = e.target.value
    this.setState({
      scores: [...mockState]
    })
  }

  submitScores = (e, scores) => {
    e.preventDefault()
    let totalScore = this.state.totalScore
    let bonusFrame = scores.length === 11 ? scores.pop() : null
    let stringify = scores.map( frame => frame.join('')).join('').split('')
    let toNumbers = stringify.map( roll => !isNaN(parseFloat(roll)) ? parseFloat(roll) : roll)

    let replacedStrikes = arr => arr.map( roll => roll === 'X' ? 10 : roll)
    let replacedSpares = arr => arr.map( (roll, i) => roll === '/' ? 10 - arr[i-1] : roll)

    let mainGameWithReplacedStrikes = replacedStrikes(toNumbers)
    let mainGameWithReplacedSpares = replacedSpares(mainGameWithReplacedStrikes)

    let bonusFrameWithReplacedStrikes = bonusFrame ? replacedStrikes(bonusFrame) : null
    let bonusFrameWithReplacedSpares = bonusFrame ? replacedSpares(bonusFrameWithReplacedStrikes) : null

    mainGameWithReplacedStrikes.forEach( (roll, i) => {

      // if the roll is a strike
      if (roll === 10) {
        mainGameWithReplacedStrikes[i+2] === '/' ?
          totalScore +=20 :
        mainGameWithReplacedStrikes[i+1] && mainGameWithReplacedStrikes[i+2] ?
          totalScore += 10 + mainGameWithReplacedStrikes[i+1] + mainGameWithReplacedStrikes[i+2] :
        mainGameWithReplacedStrikes[i+1] ?
          totalScore+= 10 + mainGameWithReplacedStrikes[i+1] + bonusFrameWithReplacedStrikes[0] :
          totalScore += 10 + bonusFrameWithReplacedStrikes.reduce((cv, acc) => cv+acc)
      }

      // if the roll is a spare
      else if (roll === '/') {
        mainGameWithReplacedStrikes[i+1] ?
          totalScore += mainGameWithReplacedSpares[i] + mainGameWithReplacedStrikes[i+1] :
          totalScore += mainGameWithReplacedSpares[i] + parseFloat(bonusFrame[0])
      }

      // if the roll is neither a strike or spare
      else {
        totalScore += roll
      }
    })

    this.setState({
      totalScore: totalScore
    })

    console.log(this.state.totalScore)
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

    let submitScores =
      <button
      onClick={ e => {
        this.submitScores(e, this.state.scores)
      }}>Submit Scores!</button>

    return (
      <div>
        {output}
        {submitScores}
      </div>
    )

  }
}

export default Frames
