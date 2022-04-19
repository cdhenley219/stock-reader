import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStocksBySymbol,
            pushSelectedStock,
            resetList
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

    const handleInputClick = e => {
        if (selectedList.length < 3) {
            setPickerOpened(true);
        }  
        else {
            setError('Only 3 stocks can be selected at a time.');
        }
    };

    const handleInputKeyUp = e => {
        const inputValue = e.target.value;
        if (inputValue.length > 0) {
            dispatch(fetchStocksBySymbol(inputValue));
        }
        else {
            dispatch(resetList());
        }
        
    };

   const canOptionsStayOpen = pickerOpened && selectedList.length <= 3 && stocksList.length > 0;

    const selectStock = item => {
        setPickerOpened(false);
        dispatch(pushSelectedStock(item));
    };  

    useOnOutsideClick(containerRef, () => setPickerOpened(false));

    return (
        <div className="stocks-picker" ref={containerRef}>
            <label htmlFor="stock-picker-input" className="stocks-picker__label">Enter up to 3 stocks to compare thee current stock prices.</label>
            <input id="stock-picker-input" className="stocks-picker__input" readOnly={selectedList.length === 3} onKeyUp={handleInputKeyUp} onClick={handleInputClick} />
            <div className="stocks-picker__error" hidden={!error}>{error}</div>
            <div className={`stocks-picker__options ${canOptionsStayOpen ? "options--open" : ""}`}>
                <ul className="stocks-picker__options__list">{listItems}</ul>
            </div>
        </div>
    )};

export default StocksPicker;