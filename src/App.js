import React, { Component } from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';


class App extends Component {
  render() {
    return (
      <div className="App" id="animate-area">
          <header className="App-header">
            </header>
          <QuoteBox />
      </div>
    );
  }
}

export default App;
