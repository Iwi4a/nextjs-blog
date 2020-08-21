import React from 'react';
import AboutHero from './AboutHero';

const mockData = {
    image: 'https://placedog.net/1920/1080',
    title: 'This is a test title!'

}

export const Basic = () => <AboutHero image={mockData.image} title={mockData.title} />

export default {
    title: "Organisms/AboutHero"
}
