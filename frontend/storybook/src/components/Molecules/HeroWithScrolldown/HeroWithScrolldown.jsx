import React from 'react';
import PropTypes from 'prop-types';
import ScrollDown from '../../Atoms/ScrollDown/ScrollDown';
import FixedBackground from '../../Atoms/FixedBackground/FixedBackground';
import SelfTypingText from '../../Atoms/SelfTypingText/SelfTypingText';
import { ScrollTo } from "react-scroll-to";
import './style.scss';

const HeroWithScrolldown = ({ image, className, children, style }) => {
    return (
        <div className={`HeroWithScrolldown ${className}`}>
            <FixedBackground image={image} fullScreen={true} style={style}>
                {children}
                <div className="HeroWithScrolldown__scroll-down">
                    <ScrollTo>
                        {({ scroll }) => (
                            <ScrollDown onClick={() => scroll({ y: window.innerHeight, smooth: true })}>Scroll Down</ScrollDown>
                        )}
                    </ScrollTo>
                    
                </div>
            </FixedBackground> 
        </div>
    )
}

HeroWithScrolldown.propTypes = {
    image: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};

HeroWithScrolldown.defaultProps = {
    image: '',
    className: '',
    style: {},
};

export default HeroWithScrolldown;
