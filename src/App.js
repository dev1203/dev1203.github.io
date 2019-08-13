import React, { Component } from 'react';
import './App.css';

class App extends Component{
  render() {
    let name = 'Dev'
    return (
      <div className="App">
          <p> Hello {name}</p>
      </div>
    );
  }
}

export default App;
 