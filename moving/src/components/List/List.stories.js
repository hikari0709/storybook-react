import React from 'react';
import List from './List';

export default {
  component: List,
  title: 'List',
};

const Template = (args) => <List {...args} />;

export const Default = Template.bind({});
