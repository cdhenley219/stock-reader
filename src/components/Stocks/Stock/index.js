import React from 'react';
import PropTypes from 'prop-types';
import Close from '../../Close';
import ArrowImage from '../../ArrowImage';
import './index.css';

const Stock = ({ data, isRemovable = false }) => {    

    return (
        <div className="stock">
            <div className="stock__head">
                <h2 className="stock__head__text">{data.overview.name}</h2>
                {isRemovable && <Close/>} 
            </div>
            
            
            <div className="stock__main">
                <ArrowImage priceChange={data.quote.change}/>
                <div className="stock__main__data">
                    <span className="stock__main__data__price">{`$${data.quote.price}`}</span>
                    <span className={`stock__main__data__change change--positive`}>{`${data.quote.change}%`}</span>
                </div>
            </div>

           
            <div className="stock__details">
                <h2>Stats</h2>
                <table className="stock__details__table">
                    <tr className="stock__details__table__row">
                        <th className="stock__details__table__row__header" scope="row">High</th>
                        <td className="stock__details__table__row__data">{data.overview['52WeekHigh']}</td>
                    </tr>

                    <tr className="stock__details__table__row">
                        <th className="stock__details__table__row__header" scope="row">Low</th>
                        <td className="stock__details__table__row__data">{data.overview['52WeekLow']}</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

Stock.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    isRemovable: PropTypes.bool
};

export default Stock;