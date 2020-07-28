import React from 'react';
import SVG, { Icons } from './SVG';

export const IconsList = () => {
    const icons = Object.keys(Icons).map(icon => {
        return (
            <div>
                 <SVG icon={icon.toString()} />
            </div>
        )
    })
    return (
        <>
            {icons}
        </>
    )
}


export default { title: 'Atoms/SVG', }