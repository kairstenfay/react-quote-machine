import React, { Component } from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';
import Logo from './components/Logo';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
          </header>
          <QuoteBox />
          <Logo />
      </div>
    );
  }
}

export default App;
