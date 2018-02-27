import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header'
import Game from './Components/Game'
import Footer from './Components/Footer'
import styled from 'styled-components'

const Wrap = styled.div`
  background-color: #4A96AD;
  text-align: center;
`

class App extends Component {
  render() {
    return (
      <Wrap>
        <Header />
        <Game>

        </Game>
        <Footer></Footer>
      </Wrap>
    )
  }
}

export default App
