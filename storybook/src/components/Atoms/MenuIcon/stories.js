import React from 'react';
import MenuIcon from './MenuIcon';

export const MenuIconButton = () => <MenuIcon />

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