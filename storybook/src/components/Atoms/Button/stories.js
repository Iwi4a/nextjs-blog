import React from 'react';
import { Button } from './Button';
import SVG from './../SVG/SVG';

const ButtonTemplate = (args, text) => <Button {...args}> { text }</Button>

export const TextButton = () => <Button type="main">Test Worked</Button>

export const IconButton = () => <Button type="main" icon="download">Test Worked</Button>

export default { title: 'Atoms/Button' }