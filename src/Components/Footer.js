import React, { Component } from 'react'
import styled from 'styled-components'

const Foot = styled.div`
  bottom: 0;
  font-size: 22px;
  padding: 20px 20px 20px 20px;
  position: absolute;
  width: 100%;
  background-color: #7D1935;
  color: white
`

class Footer extends Component {
  render() {
    return (
      <Foot>
          Created by Joshua Wood, © 2018
      </Foot>
    )
  }
}

export default Footer
