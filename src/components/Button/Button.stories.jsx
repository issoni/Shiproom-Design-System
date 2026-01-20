// src/components/Button/Button.stories.jsx
import React from 'react';
import { Button } from './Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
      description: 'Button style variant',
    },
    size: {
      control: 'select',
      options: ['small', 'base', 'large'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'base',
  children: 'Start Streaming',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'base',
  children: 'Cancel',
};

export const Small = Template.bind({});
Small.args = {
  variant: 'primary',
  size: 'small',
  children: 'Follow',
};

export const Large = Template.bind({});
Large.args = {
  variant: 'primary',
  size: 'large',
  children: 'Go Live',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  size: 'base',
  disabled: true,
  children: 'Start Streaming',
};
