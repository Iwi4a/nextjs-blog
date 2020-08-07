import React from 'react';
import Sidebar from './Sidebar';
import MenuItems from '../../Atoms/MenuItem/MenuItem';
import { withKnobs, boolean } from '@storybook/addon-knobs';

const navOptionsMock = [
    { title: 'Option 1', url: 'option1' },
    { title: 'Option 2', url: 'option2' },
    { title: 'Option 3', url: 'option3' },
    { title: 'Option 4', url: 'option4' },
    { title: 'Option 5', url: 'option5' }
];

const socialLinksMock = [
    { id: 'linkedin', url:'#' },
    { id: 'facebook', url:'#' },
    { id: 'github', url:'#' }
];

const menuOptions = navOptionsMock.map(option => {
    return <li key={option.title}><a href="#"><MenuItems title={option.title} /></a></li>
})


export const Default = () => {
    return (
        <div>
            <Sidebar showCloseButton={boolean('Toggle close button', true)} isOpen={boolean('Toggle menu', true)} socialMediaUrls={socialLinksMock}>
                <ul>
                    {menuOptions}
                </ul>
            </Sidebar>
        </div>
    )
}

export default {
    title: 'Molecules/Sidebar',
    decorators: [withKnobs],
}
