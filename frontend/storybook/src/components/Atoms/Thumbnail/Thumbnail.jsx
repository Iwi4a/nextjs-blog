import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Thumbnail = (props) => {
    return (
        <div className="thumbnail">
            <div className="thumbnail__image" style={{ backgroundImage: `url('${props.image}'`, }}>
                <div className="filter"></div>
            </div>
            <div className="thumbnail__container">
                <h3>{props.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: props.children}} />
                <span>{props.button}</span>
            </div>
        </div>
    )
}

Thumbnail.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    button: PropTypes.element.isRequired,
    children: PropTypes.string.isRequired,
}

export default Thumbnail;