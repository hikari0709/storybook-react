import React from 'react';
import List from './List';
import PropType from 'prop-types';

export default {
  component: List,
  title: 'List',
  argTypes: {
    heading: {
      control: { type: PropType.boolean },
    },
    text: {
      control: { type: PropType.text },
    },
    items: { type: PropType.array },
  },
};

const Template = (arg) => <List {...arg} />;

export const Default = Template.bind({});

Default.args = {
  heading: false,
  text: 'リストのタイトルが入ります',
  items: ['item1', 'item2', 'item3'],
};
