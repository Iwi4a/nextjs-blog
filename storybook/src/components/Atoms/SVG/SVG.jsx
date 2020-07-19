import React from 'react';
import propTypes from 'prop-types';
import IconDownload from './icons/download.svg';
import IconPaperPlane from './icons/paper-plane.svg';

export const Icons = {
    download: IconDownload,
    contact: IconPaperPlane,
}

const SVG = ({ icon, ...rest }) => {
    const SvgIcon = Icons[icon];
    if (SvgIcon === 'undefined') null;
    return <SvgIcon {...rest} />;
}

SVG.propTypes = {
    icon: propTypes.string.isRequired,
}

export default SVG;