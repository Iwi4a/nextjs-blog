import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Message = ({ children, type }) => {
    return (
        <p className={`Message Message--${type}`}>
            {children}
        </p>
    )
}

Message.defaultProps = {
    type: 'success'
}

Message.propTypes = {
    type: PropTypes.string.isRequired,
}


export default Message
