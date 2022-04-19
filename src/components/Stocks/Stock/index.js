import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {fetchLastStockQuote} from '../../../store/stocksSlice';
import Close from '../../Close';
import ArrowImage from '../../ArrowImage';
import './index.css';

const Stock = ({ data, isRemovable = false }) => {
    const dispatch = useDispatch();
    const convertToNum = str => (str && !isNaN(str)) > 0 ? Number(parseFloat(str).toFixed(2)) : 0.00;
    const convertPercentage = str => `${convertToNum(str.slice(0,str.length-1))}%`;

    useEffect(() => {
        dispatch(fetchLastStockQuote(data.symbol));
    }, [data.symbol]);

    return (<div className="stock">
        <div className="stock__head">
            <h2 className="stock__head__text">{data.name}</h2>
            {isRemovable && <Close/>} 
        </div>         
      
      { data.quote && 
       ( <React.Fragment>
            <div className="stock__main">
                <ArrowImage priceChange={convertToNum(data.quote['09. change'])}/>
                <div className="stock__main__data">
                    <span className="stock__main__data__price">${convertToNum(data.quote['05. price'])}</span>
                    <span className={`stock__main__data__change ${data.quote['10. change percent'].charAt(0) === '-' ? 'change--negative':'change--positive' }`}>
                        {convertPercentage(data.quote['10. change percent'])}
                    </span>
                </div>
            </div>  

            <div className="stock__details">
                <h2>Stats</h2>
                <table className="stock__details__table">
                    <tbody>
                    <tr className="stock__details__table__row">
                        <th className="stock__details__table__row__header" scope="row">High</th>
                        <td className="stock__details__table__row__data">{convertToNum(data.quote['03. high'])}</td>
                    </tr>

                    <tr className="stock__details__table__row">
                        <th className="stock__details__table__row__header" scope="row">Low</th>
                        <td className="stock__details__table__row__data">{convertToNum(data.quote['04. low'])}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </React.Fragment>)}
    </div>)
};

Stock.propTypes = {
    data: PropTypes.object,
    isRemovable: PropTypes.bool
};

export default Stock;