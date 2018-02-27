import React, { Component } from 'react'
import styled from 'styled-components'

const Foot = styled.div`
  bottom: 0;
  font-size: 12px;
  text-align: center;
  padding: 20px 20px 20px 20px;
  position: absolute;
  width: 100%;
`

class Footer extends Component {
  render() {
    return (
      <Foot>

          Created by Joshua Wood, Copyright 2018


      </Foot>
    )
  }
}

export default Footer
