import React from 'react';
import HeroWithScrolldown from './HeroWithScrolldown';

const mockData = {
    image: 'https://placedog.net/1920/1080',
    title: 'This is a test title!'

}

export const Basic = () => <HeroWithScrolldown image={mockData.image}>Test test</HeroWithScrolldown>

export default {
    title: "Molecules/HeroWithScrolldown"
}
