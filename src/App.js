import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header'
import Game from './Components/Game'
import Footer from './Components/Footer'
import styled from 'styled-components'

const Wrap = styled.div`
  background-color: #E87DE4;
  text-align: center;
`

class App extends Component {
  render() {
    return (
      <Wrap className="App">
        <header className="App-header">
          <Header />


        </header>
        <Game />
        <Footer />
      </Wrap>
    )
  }
}

export default App
