import React, { Component } from 'react';

const FilteredFruitList = ({ fruit, filter }) => {
  const newFruitList = filter === null ? fruit : fruit.filter(singleFruit => singleFruit.fruit_type === filter)

  return (
    <ul className="fruit-list">
      {newFruitList.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  )

}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
}

export default FilteredFruitList;
