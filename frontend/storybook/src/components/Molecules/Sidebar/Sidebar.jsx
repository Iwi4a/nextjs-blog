import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../Atoms/Logo/Logo';
import SVG from '../../Atoms/SVG/SVG';
import NavCloseButton from '../../Atoms/NavCloseButton/NavCloseButton';
import './styles.scss';

const Sidebar = ({ children, isSidebarOpen, showCloseButton, closeButtonHandler, socialMediaUrls }) => {
    const socialMedia = socialMediaUrls.map(data => {
        return (
            <a key={data.id} className="Sidebar__social__link" href={data.url}>
                <SVG icon={data.id} />
            </a>
        )
    })
    return (
        <div className={`Sidebar ${isSidebarOpen ? 'Sidebar--open' : ''}`}>
            <Logo className='Sidebar__logo' />
            <div className="Sidebar__links">
                {children}
            </div>
            <NavCloseButton onClick={closeButtonHandler} visible={isSidebarOpen && showCloseButton} />
            <div className="Sidebar__social">
                {socialMedia}
            </div>
        </div>
    )
}

Sidebar.propTypes = {
    isSidebarOpen: PropTypes.bool,
    socialMediaUrls: PropTypes.array,
    showCloseButton: PropTypes.bool,
    closeButtonHandler: PropTypes.func,
}

Sidebar.defaultProps = {
    isSidebarOpen: false,
    showCloseButton: false,
    socialMediaUrls: [],
    closeButtonHandler: () => {}
}

export default Sidebar
