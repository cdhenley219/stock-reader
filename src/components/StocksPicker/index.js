import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStocksBySymbol,
            pushSelectedStock,
            fetchLastStockOverview,
            fetchLastStockQuote 
        } from '../../store/stocksSlice';
import useOnOutsideClick from '../../hooks/useOnOutsideClick';
import './index.css';

const StocksPicker = () => {
    const stocksList = useSelector(state => state.stock.list);
    const selectedList = useSelector(state => state.stock.selectedDetailsList);

    const dispatch = useDispatch();
    const [pickerOpened, setPickerOpened] = useState(false);
    const [error, setError] = useState('');
    const containerRef = useRef();
    
    const listItems = stocksList.map((item, index) => (
        <li className="stocks-picker__options__list__item" key={index} onClick={() => selectStock(item)}>
            {item['1. symbol']}
        </li>
    ));

    const handleInputClick = () => {
        if (selectedList.length < 3) {
            setPickerOpened(true);
        }
        
        else {
            setError('Only 3 stocks can be selected at a time.');
        }
    };

    const canOptionsOpen = () => pickerOpened && selectedList.length <= 3 && stocksList.length > 0;

    const selectStock = item => {
        setPickerOpened(false);
        dispatch(pushSelectedStock(item));
        dispatch(fetchLastStockOverview(item['1. symbol']));
        dispatch(fetchLastStockQuote(item['1. symbol']));
    };  

    useOnOutsideClick(containerRef, () => setPickerOpened(false));

    return (
        <div className="stocks-picker" ref={containerRef}>
            <input className="stocks-picker__input" readOnly={selectedList.length === 3} onKeyUp={e => dispatch(fetchStocksBySymbol(e.target.value))} onClick={() => handleInputClick()} />
            <div className="stocks-picker__error" hidden={!error}>{error}</div>
            <div className={`stocks-picker__options ${canOptionsOpen() ? "options--open" : ""}`}>
                <ul className="stocks-picker__options__list">{listItems}</ul>
            </div>
        </div>
    )};

export default StocksPicker;