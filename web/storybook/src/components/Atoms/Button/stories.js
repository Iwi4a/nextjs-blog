import React from 'react';
import Button from './Button';
import SVG from './../SVG/SVG';

const ButtonTemplate = (args, text) => <Button {...args}> { text }</Button>

export const LinkButton = () => <Button btnType="main" href="https://google.com">Link Test Worked</Button>

export const TextButton = () => <Button btnType="main">Test Worked</Button>

export const IconButton = () => <Button btnType="main" icon="download">Test Worked</Button>

export const SecondaryButton = () => <Button btnType="secondary">Test Worked</Button>

export const SecondaryButtonWithIcon = () => <Button btnType="secondary" icon="contact">Test Worked</Button>


export default { title: 'Atoms/Button' }