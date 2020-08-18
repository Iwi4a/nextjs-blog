import React from 'react';
import PropTypes from 'prop-types';
import ScrollDown from '../../Atoms/ScrollDown/ScrollDown';
import FixedBackground from '../../Atoms/FixedBackground/FixedBackground';
import SelfTypingText from '../../Atoms/SelfTypingText/SelfTypingText';
import { ScrollTo } from "react-scroll-to";
import './style.scss';

const HomepageHero = ({ image, title, backgroundStyle }) => {
    return (
        <div className="HomepageHero">
            <FixedBackground image={image} fullScreen={true} style={backgroundStyle}>
                <div class="HomepageHero__container">
                    <h1 className="HomepageHero__container__title">{title}</h1>
                    <SelfTypingText startDelay={1500} backspaceDelay={1000} backspace="o">Also known as Ive</SelfTypingText>
                </div>
                <div class="HomepageHero__scroll-down">
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

HomepageHero.propTypes = {
    image: PropTypes.string,
    backgroundStyle: PropTypes.object,
};

HomepageHero.defaultProps = {
    image: '',
    backgroundStyle: {},
};

export default HomepageHero;
