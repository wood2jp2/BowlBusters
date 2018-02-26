import React, { Component } from 'react'
import styled from 'styled-components'

const Head = styled.div`
  color: blue;
  font-size: 40px;

  > h4 {
    font-size: 25px
  }
`

class Header extends Component {
  render() {
    return (<Head>
      Bowling Bash
      <h4 className="App-title">Enjoy your own bowling scorer on your way to 300!</h4>
    </Head>
  )
  }
}

export default Header
