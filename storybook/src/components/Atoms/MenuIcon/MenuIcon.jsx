import React, { useState } from 'react';
import './style.scss';

const MenuIcon = ({ isActive, ...rest}) => {
    return (
        <div className="MenuIcon mobile" {...rest}>
            <div className={`MenuIcon__container ${isActive ? 'MenuIcon__container--open' : ''}`} >
                <div className="mline-1"></div>
                <div className="mline-2"></div>
                <div className="mline-3"></div>
            </div>
        </div>
    )
}

MenuIcon.defaultProps = {
    isActive: false,
}

export default MenuIcon;
