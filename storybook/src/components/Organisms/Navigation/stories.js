import React from 'react';
import Navigation from './Navigation';
import MenuItems from '../../Atoms/MenuItem/MenuItem';
import { withKnobs, boolean } from '@storybook/addon-knobs';

const navOptionsMock = [
    { title: 'Option 1', href: 'option1' },
    { title: 'Option 2', href: 'option2' },
    { title: 'Option 3', href: 'option3' },
    { title: 'Option 4', href: 'option4' },
    { title: 'Option 5', href: 'option5' }
];

const socialLinksMock = [
    { id: 'linkedin', href:'#' },
    { id: 'facebook', href:'#' },
    { id: 'github', href:'#' }
];

const menuOptions = navOptionsMock.map(option => {
    return <li key={option.title}><a href="#"><MenuItems title={option.title} /></a></li>
})


export const navigation = () => {
    return (
        <div>
            <Navigation showCloseButton={boolean('Toggle close button', true)} isOpen={boolean('Toggle menu', true)} socialMediaUrls={socialLinksMock}>
                <ul>
                    {menuOptions}
                </ul>
            </Navigation>
        </div>
    )
}

export default {
    title: 'Organisms/Navigation',
    decorators: [withKnobs],
}
