import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../Atoms/Logo/Logo';
import SVG from '../../Atoms/SVG/SVG';
import NavCloseButton from '../../Atoms/NavCloseButton/NavCloseButton';
import './styles.scss';

const Navigation = ({ children, isOpen, showCloseButton, socialMediaUrls }) => {
    const socialMedia = socialMediaUrls.map(data => {
        return (
            <a key={data.id} className="Navigation__social__link" href={data.href}>
                <SVG icon={data.id} />
            </a>
        )
    })
    return (
        <div className={`Navigation ${isOpen ? 'Navigation--open' : ''}`}>
            <Logo className='Navigation__logo' />
            <div className="Navigation__links">
                {children}
            </div>
            <NavCloseButton visible={showCloseButton} />
            <div className="Navigation__social">
                {socialMedia}
            </div>
        </div>
    )
}

Navigation.propTypes = {
    isOpen: PropTypes.bool,
    socialMediaUrls: PropTypes.array,
    showCloseButton: PropTypes.bool,
}

Navigation.defaultProps = {
    isOpen: false,
    showCloseButton: false,
    socialMediaUrls: [],
}

export default Navigation
