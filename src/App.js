import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.isOn = this.isOn.bind(this)

    console.log('1, 0',this.isOn(1,0))
    console.log('1, 1',this.isOn(1,1))
    console.log('4, 0',this.isOn(4,0))
    console.log('4, 47',this.isOn(4,47))
    console.log('4, 30',this.isOn(4,30))
  }

  isOn(n, k) {
    // check if k is less than the minimum movements required to set to ON all snappers (base)
    const base = (Math.pow(2,n) - 1)

    const checkCiclicLoop = () => {
      // start to checking if its the first loop to turn all snappers to ON
      let cicle = 1
      console.log(`${(cicle * base) + (cicle - 1) } is greater than ${k}`)
      while(k >= (cicle * base) + (cicle - 1)) {
        if(k === (cicle * base) + (cicle - 1)){
          return true
        }

        cicle++
      }
      return false
    }

    if(k < base) {
      return false
    } else {
      // check if k is equal to the base
      // if k is greater or equal to than the base
      // check if k is equal to b.base, when b is the number of cicles to set all snappers to ON
      return checkCiclicLoop()
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
