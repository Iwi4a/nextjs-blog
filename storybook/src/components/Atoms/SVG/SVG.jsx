import React from 'react';
import propTypes from 'prop-types';
import IconDownload from './icons/download.svg';
import IconPaperPlane from './icons/paper-plane.svg';
import IconLinkedin from './icons/icon-linkedin.svg';
import IconFacebook from './icons/icon-facebook.svg';
import IconGithub from './icons/icon-github.svg';
import IconEmail from './icons/icon-email.svg';
import IconCSS3 from './icons/icon-css3.svg';
import IconHTML5 from './icons/icon-html5.svg';
import IconJQuery from './icons/icon-jquery.svg';
import IconJS from './icons/icon-js.svg';
import IconLeftArrow from './icons/icon-left-arrow.svg';
import IconRightArrow from './icons/icon-right-arrow.svg';
import IconLove from './icons/icon-love.svg';
import IconPHP from './icons/icon-php.svg';
import IconPointer from './icons/icon-pointer.svg';
import IconShare from './icons/icon-share.svg';
import IconViewAll from './icons/icon-view-all.svg';
import IconWordPress from './icons/icon-wordpress.svg';

export const Icons = {
    download: IconDownload,
    contact: IconPaperPlane,
    linkedin: IconLinkedin,
    facebook: IconFacebook,
    github: IconGithub,
    email: IconEmail,
    css3: IconCSS3,
    html5: IconHTML5,
    jquery: IconJQuery,
    js: IconJS,
    leftArrow: IconLeftArrow,
    rightArrow: IconRightArrow,
    love: IconLove,
    php: IconPHP,
    pointer: IconPointer,
    share: IconShare,
    viewAll: IconViewAll,
    wordpress: IconWordPress
}

const SVG = ({ icon, ...rest }) => {
    const SvgIcon = Icons[icon];
    if (SvgIcon === undefined) return null;
    return <SvgIcon {...rest} />;
}

SVG.propTypes = {
    icon: propTypes.string.isRequired,
}

export default SVG;