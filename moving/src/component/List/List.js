import React from 'react';
import PropType from 'prop-types';

function ListHeading({ text }) {
  return <p class="c-list__heading">{text}</p>;
}

function List({ heading, text, items }) {
  const listItems = items.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return (
    <section class="p-article">
      {heading && <ListHeading text={text} />}
      <ul class="c-list">
        {listItems}
      </ul>
    </section>
  );
}

export default List;
