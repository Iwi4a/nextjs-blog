import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Logo from '../../Atoms/Logo/Logo';
import MenuIcon from '../../Atoms/MenuIcon/MenuIcon';
import Sidebar from '../../Molecules/Sidebar/Sidebar';
import './styles.scss';

const Navigation = ({ children, navOptions, socialMediaUrls, hideLogo, darkMenuIcon, inView, ...rest }) => {
    const [isSidebarOpen, setSidebarState] = useState(false);
    const [isCloseButtonVisible, setCloseButtonVisibility] = useState(false);
    
    useEffect(() => {
        setSidebarState(false);
        setCloseButtonVisibility(false);
    }, [inView]);

    const showCloseButtonHandler = () => {
        if (window.pageYOffset > 250) {
            setCloseButtonVisibility(true);
        } else {
            setCloseButtonVisibility(false);
        }
    }

    const toggleSidebarHandler = () => {
        if (!isSidebarOpen) {
            if (window.pageYOffset > 250) {
                setCloseButtonVisibility(true);
            } else {
                window.addEventListener('scroll', showCloseButtonHandler);
            }
        } else {
            window.removeEventListener('scroll', showCloseButtonHandler);
        }
        setSidebarState(!isSidebarOpen);
    }
    return (
        <div className={`Navigation ${isSidebarOpen ? 'Navigation--open' : ''}`} {...rest}>
            { hideLogo ? null : <Link href="/"><a><Logo className={`Navigation__logo`} /></a></Link> }
            <MenuIcon darkIcon={darkMenuIcon} isActive={isSidebarOpen} onClick={toggleSidebarHandler} />
            <Sidebar isSidebarOpen={isSidebarOpen} showCloseButton={isCloseButtonVisible} closeButtonHandler={toggleSidebarHandler} socialMediaUrls={socialMediaUrls}>
                {navOptions}
            </Sidebar>
            {children}
        </div>
    );
}

Navigation.propTypes = {
    hideLogo: PropTypes.bool,
    socialMediaUrls: PropTypes.array,
    navOptions: PropTypes.element,
}

Navigation.defaultProps = {
    hideLogo: false,
    socialMediaUrls: [],
}

export default Navigation
