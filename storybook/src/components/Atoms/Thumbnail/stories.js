import React from 'react';
import Thumbnail from './Thumbnail';

export const thumbnail = () => {
    return (
        <div style={{ padding: '15px'}}>
            <Thumbnail image="https://placedog.net/500" title="Thumbnail title" button="Read more about this">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Thumbnail>
        </div>
    )
}

export default {
    title: 'Atoms/Thumbnail',
    parameters: {
        backgrounds: {
            default: 'Dark',
            values: [
                { name: 'Dark', value: '#ccc', }
            ],
        }
    }
}