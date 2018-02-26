import React, { Component } from 'react'
import TrackScores from './TrackScores'

class Frames extends Component {

  constructor (props) {
    super(props)
    this.state = {
      username: props.username || 'Bowler',
      bonusFrame: false,
      scores: [['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', ''], ['', '']],
      frames: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      bonusFrameValues: ['', ''],
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
    console.log('asdf')
  }

  displayBonusButton = e => {
    e.preventDefault()
    this.setState({
      bonusFrame: true
    })
  }

  addBonusFrame = (e, i) => {
    e.preventDefault()
    let mockBonusFrame = [...this.state.bonusFrameValues]
    mockBonusFrame[i] = e.target.value
    this.setState({
      bonusFrameValues: [...mockBonusFrame]
    })
  }

  // 1. pushes any bonus frame into the main score array
  combineBonusAndScores = e => {
    e.preventDefault()
    let mockScoreState = [...this.state.scores]
    mockScoreState.push(this.state.bonusFrameValues)
    this.submitScores(mockScoreState)
  }

  // 2. scores all the frames
  submitScores = scores => {
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
      onClick={ e => this.combineBonusAndScores(e)}>Submit Scores!</button>

    let displayBonusButton = <button
      name='addBonusFrame'
      onClick={ e => this.displayBonusButton(e)}>BonusFrame++</button>

    let eleventhFrame = <div id={11}>
              <p>Bonus Frame</p>
              <input
                name='bonusRoll1'
                maxLength={1}
                ref={1}
                onChange={ e => this.addBonusFrame(e, 0)}>
                </input>
              <input
                name='bonusRoll2'
                maxLength={1}
                ref={2}
                onChange={ e => this.addBonusFrame(e, 1)}>
                </input>
            </div>

    return (
      <div>
        <h4>Welcome, {this.state.username}</h4>
        {output}
        {this.state.bonusFrame ? eleventhFrame : displayBonusButton}
        {submitScores}
        {this.state.totalScore > 0 ? <TrackScores score={this.state.totalScore} /> : null}
      </div>
    )

  }
}

export default Frames
