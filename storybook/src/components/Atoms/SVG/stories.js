import React from 'react';
import SVG, { Icons } from './SVG';

const SVGs = (args) => <SVG {...args} />

export const Download = SVGs.bind({});
Download.args = { icon: 'download' }

export const Contact = SVGs.bind({});
Contact.args = { icon: 'contact' }


export default { title: 'Atoms/SVG', }