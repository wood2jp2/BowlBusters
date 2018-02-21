import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Game from './Components/Game'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />

          <h1 className="App-title">Enjoy your own bowling scorer on your way to 300!</h1>
        </header>
        <Game />
      </div>
    );
  }
}

export default App;
