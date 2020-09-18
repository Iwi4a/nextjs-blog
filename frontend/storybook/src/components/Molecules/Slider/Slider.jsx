import React from 'react';
import PropTypes from 'prop-types';
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import "./styles.scss";


const Slider = ({ children, settings, className, ...rest}) => {

    const sliderDefaultSettings = {
        dots: true,
        accessibility: true,
        slidesToShow: 1,
    };

    let sliderSettings = {
        ...sliderDefaultSettings,
    };

    if (Object.keys(settings).length) {
        sliderSettings = {
            ...sliderDefaultSettings,
            ...settings,
        }
    }
    return (
        <div className={`Slider ${className}`} {...rest}>
            <SlickSlider { ...sliderSettings }>
                {children}
            </SlickSlider>
        </div>
    )
}

Slider.propTypes = {
    settings: PropTypes.object,
    className: PropTypes.string,
}

Slider.defaultProps = {
    settings: {},
    className: '',
}

export default Slider;
