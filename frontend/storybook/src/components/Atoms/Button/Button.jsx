import React from 'react';
import SVG from './../SVG/SVG';
import PropTypes from 'prop-types';
import './style.scss';

const Button = ({children, icon, type, href, ...rest}) => {

    const buttonBody = () => {
        return (
            <>
                { type === 'main' ? 
                    <svg className="btn--main__border">
                        <rect x="0" y="0" fill="none" width="100%" height="100%"></rect>
                    </svg>
                : null }
                <span>{children}</span>
                { icon ? <SVG className="btn__icon" icon={icon} /> : null}
            </>
        )
    };

    const renderButton = () => {
        return <button className={`btn btn--${type}`} {...rest}>{buttonBody()}</button>;
    }

    const renderLink = () => {
        return <a className={`btn btn--${type}`} href={href} {...rest}>{buttonBody()}</a>;
    }

    return !href ? renderButton() : renderLink();
};

Button.propTypes = {
    type: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.string,
}

Button.defautProps = {
    type: 'main',
    href: '',
}

export default Button;