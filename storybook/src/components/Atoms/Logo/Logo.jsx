import React from 'react';
import SVGLogo from './logo.svg';
import SVGLogoWithShadow from './logoWithShadow.svg';

const Logo = ({ withShadow, ...rest}) => {
    return withShadow ? <SVGLogoWithShadow {...rest} /> : <SVGLogo {...rest} />;
}

Logo.defaultProps = { 
    withShadow: false,
}

export default Logo;
