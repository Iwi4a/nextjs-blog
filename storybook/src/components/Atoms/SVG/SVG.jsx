import React from 'react';
import propTypes from 'prop-types';
import IconDownload from './icons/download.svg';
import IconPaperPlane from './icons/paper-plane.svg';
import IconLinkedin from './icons/icon-linkedin.svg';
import IconFacebook from './icons/icon-facebook.svg';
import IconGithub from './icons/icon-github.svg';
import IconEmail from './icons/icon-email.svg';

export const Icons = {
    download: IconDownload,
    contact: IconPaperPlane,
    linkedin: IconLinkedin,
    facebook: IconFacebook,
    github: IconGithub,
    email: IconEmail,
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