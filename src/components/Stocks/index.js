import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { popSelectedStock } from '../../store/stocksSlice';
import './index.css';

const Stocks = () => {
    const selectedList = useSelector(state => state.stock.selectedDetailsList);
    const dispatch = useDispatch();

    return (
        <div className="stocks">
        {
            selectedList.map((item, index) => (
                <div key={index}>
                    <span>{item.symbol}</span>
                    {(index === selectedList.length-1) && <button onClick={() => dispatch(popSelectedStock()) }>Remove</button>}
                </div>
            ))
        }
        </div>
    )
};

export default Stocks;