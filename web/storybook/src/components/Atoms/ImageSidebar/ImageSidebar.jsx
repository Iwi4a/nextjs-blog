import React from 'react';
import PropTypes from 'prop-types';
import { socialMediaAccounts } from '../../../../../lib/constants'
import SVG from '../SVG/SVG';
import './style.scss';

const ImageSidebar = ({ url, image, text, ...rest }) => {
    const shortIntro = "I found this very useful, check it out!";
    const socialIcons = socialMediaAccounts.map(acc => {
        return <a key={acc.id} target="_blank" href={acc.url}><SVG icon={acc.id} /></a>
    })
    return (
        <div className="ImageSidebar" {...rest}>
            <div style={{ backgroundImage: `url("${image}")`}} className="ImageSidebar__image"></div>
            <div className="ImageSidebar__wrapper">
                <div className="ImageSidebar__wrapper__text">
                    {text}
                </div>
                <div className="ImageSidebar__wrapper__contact-buttons">
                    
                    {socialIcons}
                </div>
            </div>
            
        </div>
    )
}

ImageSidebar.propTypes = {
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string,
}

export default ImageSidebar
