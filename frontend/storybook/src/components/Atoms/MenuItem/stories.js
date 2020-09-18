import React from 'react';
import MenuItem from './MenuItem';
import { boolean, withKnobs } from '@storybook/addon-knobs';


export const defaultMenuItems = () => {
    return (
        <div>
            <MenuItem title="Menu Option 1" active={boolean("Toggle active state", false)} />
        </div>
    )
}

export const multipleMenuItems = () => {
    return (
        <ul style={{margin: 0, padding: 0, listStyle: "none"}}>
            <li><MenuItem title="Menu Option 1" /></li>
            <li><MenuItem title="Menu Option 2" active={true} /></li>
            <li><MenuItem title="Menu Option 3" /></li>
        </ul>
    )
}

export default {
    title: 'Atoms/MenuItem',
    decorators: [withKnobs],
    parameters: {
        backgrounds: {
            default: 'Dark',
            values: [
                { name: 'Dark', value: '#ccc', }
            ],
        }
    }
}
