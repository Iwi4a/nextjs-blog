import React from 'react';
import NavCloseButton from './NavCloseButton';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export const navCloseButton = () => {
    return (
        <div>
            <NavCloseButton visible={boolean('Toggle visibility', true)} />
        </div>
    )
}

export default {
    title: 'Atoms/NavCloseButton',
    decorators: [withKnobs],
}
