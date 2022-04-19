import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Stock from './index';

const testData = {
    symbol: 'ABC',
    name: 'Company ABC',
    quote: {
        '03. high': '200.0000',
        '04. low': '50.0000',
        '05. price': '100.0000',
        '09. change': '-5.0000',
        '10. change percent': '0.50000'
    }
};

test('renders arrow up image', () => {
    render(<Stock data={testData}/>);
  //  expect(screen.getByRole('img', {alt:/iarrow-up/})).toBeTruthy();
});