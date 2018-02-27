import React, { Component } from 'react'
import Header from './Components/Header'
import Game from './Components/Game'
import Footer from './Components/Footer'
import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: Lobster, cursive;
    background-color: #4A96AD;
    text-align: center;
  }
`

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Game />
        <Footer />
      </div>
    )
  }
}

export default App
