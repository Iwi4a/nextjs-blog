import React from 'react';
import ScrollDown from './ScrollDown';
import { actions, action } from '@storybook/addon-actions';

export const ScrollDownButton = () => <ScrollDown onClick={action('Scroll-down-clicked')}>scroll down</ScrollDown>

export default {
    title: 'Atoms/ScrollDown', 
    parameters: {
        backgrounds: {
            default: 'Dark',
            values: [
                { name: 'Dark', value: '#ccc', }
            ],
        }
    }
};