import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import SVG from '../SVG/SVG';

const NavCloseButton = ({visible, ...rest}) => {
    return (
        <div className={`NavCloseButton ${visible ? 'NavCloseButton--visible' : ''}`} {...rest}>
            <SVG icon="leftArrow" />
        </div>
    )
}

NavCloseButton.propTypes = {
    visible: PropTypes.bool,
}

NavCloseButton.defaultProps = {
    visible: false,
}

export default NavCloseButton;
