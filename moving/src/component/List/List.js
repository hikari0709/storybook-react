import React from 'react';
import PropType from 'prop-types';

function ListHeading({ text }) {
  return <p class="c-list__heading">{text}</p>;
}

function List({ heading, text }) {
  return (
    <section class="p-article">
      {heading && <ListHeading text={text} />}
      <ul class="c-list">
        <li>Item1</li>
        <li>Item2</li>
        <li>Item3</li>
      </ul>
    </section>
  );
}

export default List;
