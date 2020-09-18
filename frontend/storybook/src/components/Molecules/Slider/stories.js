import React from 'react';
import Slider from './Slider';

const slidesMock = [
    'https://placedog.net/500/500',
    'http://placerabbit.com/g/500/500',
    'https://placebear.com/500/500',
]


export const defaultSlider = () => {
    return (
        <Slider>
            {slidesMock.map((img, idx) => {
                return (
                    <div key={idx}>
                        <img src={img} />
                    </div>
                )
            })}
        </Slider>
    )
}

export default {
    title: "Molecules/Slider"
}
