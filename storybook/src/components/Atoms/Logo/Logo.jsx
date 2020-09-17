import React from 'react';
import SVGLogo from './logo.svg';
import SVGLogoWithShadow from './logoWithShadow.svg';

const Logo = props => {
    return props.withShadow ? <SVGLogoWithShadow {...props} /> : <SVGLogo {...props} />;
}

Logo.defaultProps = { 
    withShadow: false,
}

export default Logo;
