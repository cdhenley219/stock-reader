import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { popSelectedStock } from '../../store/stocksSlice';
import './index.css';

const Stocks = () => {
    const selectedList = useSelector(state => state.stock.selectedDetailsList);
    const dispatch = useDispatch();
    const stocksList = selectedList.map((item, index) => (
        <div key={index}>
            <span>{item.symbol}</span>
            {(index === selectedList.length-1) && <button onClick={() => dispatch(popSelectedStock()) }>Remove</button>}
        </div>
    ));
    const nullList = new Array(3 - selectedList.length)
                    .fill(null)
                    .map((item, index) => <div key={index}>nothing to see here</div>);

    return (
        <div className="stocks">
            {stocksList}
            {nullList}
        </div>
    )
};

export default Stocks;