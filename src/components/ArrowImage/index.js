import React from 'react';
import PropTypes from 'prop-types';
import downRedArrow from '../../assets/red-arrow-down.png';
import upGreenArrow from '../../assets/green-arrow-up.png';
import './index.css';

const ArrowImage = ({ priceChange = 0.00 }) => {
    const imgSrc = priceChange < 0.00 ? downRedArrow : upGreenArrow;
    const alt = priceChange < 0.00 ? 'arrow down' : 'arrow up';

    return <img src={imgSrc} className="arrow-image" alt={alt}/>
};

ArrowImage.propTypes = {
    priceChange: PropTypes.number
};

export default ArrowImage;