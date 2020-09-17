import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Tile = ({ image, title, className, ...rest }) => {
    return (
        <div className={`Tile ${className}`} {...rest}>
            <img src={image} className="Tile__image" />
            <div className="Tile__filter"></div>
            <div className="Tile__filter Tile__filter--back"></div>
            <div className="Tile__content">
                <h4>{ title }</h4>
            </div>
        </div>
    )
}

Tile.propTypes = {
    image: PropTypes.string,
}

Tile.defaultProps = {
    className: '',
}

export default Tile;
