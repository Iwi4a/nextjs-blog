import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'; 

const FixedBackground = ({ img, height, fullScreen, children, hideFilter, hideDots, ...rest }) => {
    const propStyles = {
        backgroundImage: `url("${img}")`,
        height: fullScreen ? "100vh" : height
    }
    return (
        <div className="FixedBackground" style={propStyles} {...rest}>
            {hideFilter ? null : <div className="FixedBackground__filter"></div>}
            {hideDots ? null : <div className="FixedBackground__filter FixedBackground__filter--dotted"></div>}

            {children}
        </div>
    )
}

FixedBackground.propTypes = {
    img: PropTypes.string,
    height: PropTypes.string,
    fullScreen: PropTypes.bool,
    hideFilter: PropTypes.bool,
    hideDots: PropTypes.bool,
}

FixedBackground.defaultProps = {
    img: '',
    height: '500px',
    fullScreen: false,
    hideFilter: false,
    hideDots: false,
}

export default FixedBackground
