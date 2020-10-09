import React from 'react';
import Navigation from './Navigation';
import MenuItems from '../../Atoms/MenuItem/MenuItem';

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


const MenuOptionsList = () => {
    const menuButtons = navOptionsMock.map(option => {
        return <li><a href={option.url}><MenuItems title={option.title} /></a></li>
    })
    return (
        <ul>
            {menuButtons}
        </ul>
    )
}

export const Basic = () => {
    return (
        <div>
            <Navigation navOptions={<MenuOptionsList />} socialMediaUrls={socialLinksMock}>
                <div style={{height: '2000px', width:'100%', background: '#050505', color: 'white' }}>Mock Page Content</div>
            </Navigation>
        </div>
    )
}

export default {
    title: 'Organisms/Navigation',
    parameters: {
        backgrounds: {
            default: 'Dark',
            values: [
                { name: 'Dark', value: '#ccc', }
            ],
        }
    }
}
