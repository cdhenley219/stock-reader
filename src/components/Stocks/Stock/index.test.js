import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import stocksReducer from '../../../store/stocksSlice';
import Stock from './index';

const store = configureStore({ reducer: { stocks: stocksReducer }});
const testData = {
    symbol: 'ABC',
    name: 'Company ABC',
    quote: {
        '03. high': '200.0000',
        '04. low': '50.0000',
        '05. price': '100.0000',
        '09. change': '-5.0000',
        '10. change percent': '-0.50000%'
    }
};


test('renders stock with proper data', () => {
    render(
        <Provider store={store}>
            <Stock data={testData}/>
        </Provider>
    );

    expect(screen.getByText('$100')).toBeInTheDocument();
    expect(screen.getByText('0.5%')).toBeInTheDocument();
    expect(screen.getByText('200.00')).toBeInTheDocument();
    expect(screen.getByText('50.00')).toBeInTheDocument();
});

test('renders stock with close button', () => {
    render(
        <Provider store={store}>
            <Stock data={testData} isRemovable={true}/>
        </Provider>
    );
    expect(screen.getByText('Remove')).toBeInTheDocument();
});

