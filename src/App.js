//import logo from './logo.svg';
import React from 'react';
import './App.css';
import StocksDropdown from './StocksDropdown/StocksDropdown';
import Stocks from './Stocks/Stocks';

function App() {
  return (
    <div>
      <h1>Stock Comparison</h1>
      <StocksDropdown/>
      <Stocks/>
    </div>
  );
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;
