import React, { useState } from 'react'
import './style.scss';

const MenuIcon = (props) => {
    const [iconState, setIconState] = useState(false);

    const iconStateHandler = () => {
        setIconState(!iconState);
        props.onClick();
    }

    return (
        <div className="MenuIcon mobile" onClick={iconStateHandler}>
            <div className={`MenuIcon__container ${iconState ? 'MenuIcon__container--open' : ''}`} >
                <div className="mline-1"></div>
                <div className="mline-2"></div>
                <div className="mline-3"></div>
            </div>
        </div>
    )
}

export default MenuIcon;
