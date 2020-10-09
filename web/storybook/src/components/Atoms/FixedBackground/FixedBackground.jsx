import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'; 

const FixedBackground = ({ image, height, fullScreen, children, hideFilter, hideDots, style, ...rest }) => {
    const propStyles = {
        backgroundImage: `url("${image}")`,
        height: fullScreen ? "100vh" : height,
        ...style,
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
    image: PropTypes.string,
    height: PropTypes.string,
    fullScreen: PropTypes.bool,
    hideFilter: PropTypes.bool,
    hideDots: PropTypes.bool,
    style: PropTypes.object,
}

FixedBackground.defaultProps = {
    image: '',
    height: '500px',
    fullScreen: false,
    hideFilter: false,
    hideDots: false,
    style: {},
}

export default FixedBackground
