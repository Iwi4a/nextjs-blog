import React from 'react';
import PropTypes from 'prop-types';
import HeroWithScrolldown from '../../Molecules/HeroWithScrolldown/HeroWithScrolldown';
import SelfTypingText from '../../Atoms/SelfTypingText/SelfTypingText';
import './style.scss';

const HomepageHero = ({ image, title, style }) => {
    return (
        <HeroWithScrolldown className={`HomepageHero`} image={image} style={style}>
            <div className="HomepageHero__container">
                <h1 className="HomepageHero__container__title">{title}</h1>
                <SelfTypingText startDelay={1500} backspaceDelay={1000} backspace="o">Also known as Ive</SelfTypingText>
            </div>   
        </HeroWithScrolldown>
    )
}

HomepageHero.propTypes = {
    image: PropTypes.string,
    style: PropTypes.object,
};

HomepageHero.defaultProps = {
    image: '',
    style: {},
};

export default HomepageHero;
