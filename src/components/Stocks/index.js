import React from 'react';
import { useSelector } from 'react-redux';
import NullStock from './NullStock';
import Stock from './Stock';
import './index.css';

const Stocks = () => {
    const selectedList = useSelector(state => state.stock.selectedDetailsList);
    const stocksList = selectedList.map((item, index) => (
            <Stock key={index} data={item} isRemovable={(index === selectedList.length-1)}/>
    ));
    const nullList = new Array(3 - selectedList.length)
                    .fill(null)
                    .map((item, index) => <div className="stock" key={index}><NullStock/></div>);

    return (
        <section className="stocks">
             {stocksList} 
             {nullList}
        </section>
    )
};

export default Stocks;