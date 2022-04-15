import React from 'react';
import './StocksDropdown.css';

const StocksDropdown = () => {
    return (
    <div className="stocks-dropdown">
        <input className="stocks-dropdown__input" readOnly={true}/>
        <div className="stocks-dropdown__options">
            <ul className="stocks-dropdown__options__list">
                <li className="stocks-dropdown__options__list__item" value="test1">test1</li>
                <li className="stocks-dropdown__options__list__item" value="test2">test2</li>
                <li className="stocks-dropdown__options__list__item" value="test3">test3</li>
                <li className="stocks-dropdown__options__list__item" value="test4">test4</li>
                <li className="stocks-dropdown__options__list__item" value="test5">test5</li>
                <li className="stocks-dropdown__options__list__item" value="test6">test6</li>
                <li className="stocks-dropdown__options__list__item" value="test7">test7</li>
                <li className="stocks-dropdown__options__list__item" value="test8">test8</li>
            </ul>
        </div>
    </div>
)};

export default StocksDropdown;