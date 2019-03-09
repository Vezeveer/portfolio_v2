import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Temporary from './components/Temporary'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Temporary />
      </div>
    );
  }
}

export default App;
