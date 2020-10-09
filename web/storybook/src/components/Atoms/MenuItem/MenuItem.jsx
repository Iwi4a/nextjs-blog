import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const MenuItem = ({ className, active, title, ...rest}) => {
    return (
        <div className={`MenuItem ${className} ${active ? 'active' : ''}`} {...rest}>
            <span>
                {title} 
            </span>
        </div>
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
