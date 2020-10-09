import React from 'react';
import SVG, { Icons } from './SVG';

export const IconsList = () => {
    const icons = Object.keys(Icons).map(icon => {
        return (
            <div style={{
                display: 'inline-block',
                padding: '15px',
                border: '1px solid #f5f5f5'
            }}>
                 <SVG icon={icon.toString()} />
            </div>
        )
    })
    return (
        <div style={{ display: 'flex' }}>
            {icons}
        </div>
    )
}

export default { title: 'Atoms/SVG', }