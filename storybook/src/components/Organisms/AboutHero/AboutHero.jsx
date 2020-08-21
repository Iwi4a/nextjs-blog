import React from 'react';
import PropTypes from 'prop-types';
import HeroWithScrolldown from '../../Molecules/HeroWithScrolldown/HeroWithScrolldown';
import SelfTypingText from '../../Atoms/SelfTypingText/SelfTypingText';
import './style.scss';

const AboutHero = ({ image, title, style }) => {
    return (
        <HeroWithScrolldown className={`AboutHero`} image={image} style={style}>
            <div className="AboutHero__container">
               
            </div>   
        </HeroWithScrolldown>
    )
}

AboutHero.propTypes = {
    image: PropTypes.string,
    style: PropTypes.object,
};

AboutHero.defaultProps = {
    image: '',
    style: {},
};

export default AboutHero;
