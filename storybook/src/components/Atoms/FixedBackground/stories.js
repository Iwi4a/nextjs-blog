import React from 'react';
import FixedBackground from './FixedBackground';


const mockData = {
    image: 'https://placedog.net/1920/1080',
    height: '700px',
}

const Template = (args) => <div style={{ height: '150vh' }}><FixedBackground {...args} /></div>

export const Basic = () => <Template img={mockData.image} />
export const FullScreen = () => <Template img={mockData.image} fullScreen />
export const HiddenFilters = () => <Template img={mockData.image} fullScreen hideFilter={true} hideDots={true} />

export default {
    title: 'Atoms/FixedBackground',
    parameters: {
        backgrounds: {
            default: 'Dark',
            values: [
                { name: 'Dark', value: '#050505' }
            ],
        }
    }
}