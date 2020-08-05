import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const MenuItem = props => {
    return (
        <a className={`MenuItem ${props.className} ${props.active ? 'active' : ''}`}>
            <span>
                {props.title} 
            </span>
        </a>
    )
}

MenuItem.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    active: PropTypes.bool,
}

MenuItem.defaultProps = {
    title: '',
    className: '',
    active: false,
}

export default MenuItem;
