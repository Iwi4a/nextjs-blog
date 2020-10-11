import React from 'react';
import SVG from './../SVG/SVG';
import PropTypes from 'prop-types';
import './style.scss';

const Button = ({children, icon, btnType, href, ...rest}) => {

    const buttonBody = () => {
        return (
            <>
                { btnType === 'main' ? 
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
        return <button className={`btn btn--${btnType}`} {...rest}>{buttonBody()}</button>;
    }

    const renderLink = () => {
        return <a className={`btn btn--${btnType}`} href={href} {...rest}>{buttonBody()}</a>;
    }

    return !href ? renderButton() : renderLink();
};

Button.propTypes = {
    btnType: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.string,
}

Button.defautProps = {
    btnType: 'main',
    href: '',
}

export default Button;