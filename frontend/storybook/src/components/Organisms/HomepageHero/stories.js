import React from 'react';
import HomepageHero from './HomepageHero';

const mockData = {
    image: 'https://placedog.net/1920/1080',
    title: 'This is a test title!'

}

export const Basic = () => <HomepageHero image={mockData.image} title={mockData.title} />

export default {
    title: "Organisms/HomepageHero"
}
