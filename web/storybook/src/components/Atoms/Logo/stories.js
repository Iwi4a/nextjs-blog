import React from 'react';
import Logo from './Logo';

export const defaultLogo = () => {
    return (
        <div>
            <Logo />
        </div>
    )
}

export default {
    title: 'Atoms/Logo',
    parameters: {
        backgrounds: {
            default: 'Dark',
            values: [
                { name: 'Dark', value: '#050505', }
            ],
        }
    }
}
