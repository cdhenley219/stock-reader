import React from 'react';
import { useDispatch } from 'react-redux';
import { popSelectedStock } from '../../store/stocksSlice';
import './index.css';

const Close = () => {
    const dispatch = useDispatch();
    return ( 
        <div className="close">
            <button id="close-button" className="close__button" onClick={() => dispatch(popSelectedStock())}>X</button>
            <label htmlFor="close-button" className="close__label">Remove</label>
        </div>
   )
};

export default Close;