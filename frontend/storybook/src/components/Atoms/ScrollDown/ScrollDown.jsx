import React from 'react';
import './style.scss';

const ScrollDown = ({ children, ...rest }) => {
    return (
        <div className="scroll-down" { ...rest }>
            <span className="scroll-down--mouse">
                <span>
                </span>
            </span>
            <p>{ children }</p>
        </div>
    );
};


export default ScrollDown;