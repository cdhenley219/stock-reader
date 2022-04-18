import React from 'react';
import PropTypes from 'prop-types';
import downRedArrow from '../../assets/red-arrow-down.png';
import upGreenArrow from '../../assets/green-arrow-up.png';
import './index.css';

const ArrowImage = ({ priceChange = 0 }) => {
    const imgSrc = priceChange < 0 ? downRedArrow : upGreenArrow;
    return <img src={imgSrc} className="arrow-image"/>
};

ArrowImage.propTypes = {
    priceChange: PropTypes.number
};

export default ArrowImage;