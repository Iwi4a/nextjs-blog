import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const MenuIcon = ({ isActive, darkIcon, ...rest}) => {
    return (
        <div className={`MenuIcon `} {...rest}>
            <div className={`MenuIcon__container ${isActive ? 'MenuIcon__container--open' : ''}`} >
                <div className={`mline mline-1 ${darkIcon ? 'mline--dark' : ''}`}></div>
                <div className={`mline mline-2 ${darkIcon ? 'mline--dark' : ''}`}></div>
                <div className={`mline mline-3 ${darkIcon ? 'mline--dark' : ''}`}></div>
            </div>
        </div>
    )
}

MenuIcon.propTypes = {
    isActive: PropTypes.bool,
    darkIcon: PropTypes.bool,
}

MenuIcon.defaultProps = {
    isActive: false,
    darkIcon: false
}

export default MenuIcon;
