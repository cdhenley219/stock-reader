import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ArrowImage from './index';

test('renders arrow up image', () => {
    render(<ArrowImage priceChange={5.00}/>);
    expect(screen.getByRole('img', {alt:/iarrow-up/})).toBeTruthy();
});

test('renders arrow down image', () => {
    render(<ArrowImage priceChange={-5.00}/>);
    expect(screen.getByRole('img', {alt:/iarrow-down/})).toBeTruthy();
});

