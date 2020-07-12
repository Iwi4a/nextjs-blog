import React from 'react';
import { storiesOf } from '@storybook/react';
import {Button} from './Button';

const Template = (args) => <Button {...args} />
export const SimpleButton = Template.bind({});
SimpleButton.args = { label: 'Test Worked' };

export default { title: 'Button' }