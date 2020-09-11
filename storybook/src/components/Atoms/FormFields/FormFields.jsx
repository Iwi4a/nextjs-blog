import React from 'react';
import './styles.scss';

export const TextInput = ({ className, ...rest}) => {
    return (
        <input className={`text-input ${className}`} {...rest} />
    )
}

TextInput.defaultProps = {
    className: '',
}


export const TextArea = ({ className, ...rest}) => {
    return (
        <textarea className={`text-area ${className}`} {...rest}></textarea>
    )
}

TextArea.defaultProps = {
    className: '',
}