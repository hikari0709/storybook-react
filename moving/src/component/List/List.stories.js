import React from 'react';
import List from './List';

export default {
  component: List,
  title: 'List',
  argTypes: {
    heading: {
      control: { type: 'boolean' },
    },
    text: {
      control: { type: 'text' },
    },
  },
};

const Template = (arg) => <List {...arg} />;

export const Default = Template.bind({});

Default.args = {
  heading: false,
  text: 'リストのタイトルが入ります',
};
