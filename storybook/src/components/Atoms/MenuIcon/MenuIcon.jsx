import React, { useState } from 'react'
import './style.scss';

const MenuIcon = (props) => {
    const [iconState, setIconState] = useState(false);

    const iconStateHandler = () => {
        setIconState(!iconState);
        props.onClick();
    }

    return (
        <div className="mobile-nav mobile" onClick={iconStateHandler}>
            <div className={`mobile-container ${iconState ? 'mobile-open' : ''}`} >
                <div className="mline-1"></div>
                <div className="mline-2"></div>
                <div className="mline-3"></div>
            </div>
        </div>
    )
}

export default MenuIcon;
