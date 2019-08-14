import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';

class App extends Component{
  render() {
    let name = 'Dev'
    return (
      <div className="App">
          <Navbar/>
      </div>
    );
  }
}

export default App;
 