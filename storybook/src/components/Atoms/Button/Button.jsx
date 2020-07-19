import React from 'react';
import SVG from './../SVG/SVG';
import PropTypes from 'prop-types';
import './style.scss';

export const Button = ({children, icon, type}) => {
    return (
        <div className={`btn btn--${type}`}>
            { type === 'main' ? 
                <svg className="btn--main__border">
                    <rect x="0" y="0" fill="none" width="100%" height="100%"></rect>
                </svg>
            : null }
            {children}
            { icon ? <SVG className="btn__icon" icon={icon} /> : null}
        </div>
    )
}

Button.PropTypes = {
    type: PropTypes.string,
    children: PropTypes.object,
}

Button.defautProps = {
    type: 'main',
}