import React from 'react';
import MenuIcon from './MenuIcon';

export const DefaultMenuIcon = () => <MenuIcon />
export const ActiveMenuIcon = () => <MenuIcon isActive={true} />

export default {
    title: 'Atoms/MenuIcon',
    parameters: {
        backgrounds: {
            default: 'Dark',
            values: [
                { name: 'Dark', value: '#ccc', }
            ],
        }
    }
};