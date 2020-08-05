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
        backgrounds: [
            { name: 'dark background', value: '#050505', default: true }
        ]
    }
}
