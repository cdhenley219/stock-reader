import React, { Fragment } from 'react';
import './App.css';
import StocksPicker from './components/StocksPicker';
import Stocks from './components/Stocks';

function App() {
  return (
    <Fragment>
      <h1>Stock Comparison</h1>
      <StocksPicker/>
      <Stocks/>
    </Fragment>
  );
}

export default App;
