import React from 'react';
import TimelineCell from './TimelineCell';
import { withKnobs, boolean, } from "@storybook/addon-knobs";

export const defaultTimelineCell = () => {
    return (
        <div style={{padding: '40px'}}>
            <h5>Use knobs to toggle the position.</h5>
            <TimelineCell title="Front-end developer @ Home" date="Present - Future" alignRight={boolean("Position Right", false)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </TimelineCell>
        </div>
    );
};

export default {
    title: 'Atoms/TimelineCell',
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
