import React from 'react';
import propTypes from 'prop-types';
import './style.scss';

const Thumbnail = (props) => {
    return (
        <div className="thumbnail">
            <div className="thumbnail__image" style={{ backgroundImage: `url('${props.image}'`, }}>
                <div className="filter"></div>
            </div>
            <div className="thumbnail__container">
                <h3>{props.title}</h3>
                <p>{props.children}</p>
                <span>{props.button}</span>
            </div>
        </div>
    )
}

Thumbnail.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
}

export default Thumbnail;