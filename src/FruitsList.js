import React from 'react';

const FruitList = () => {
  const fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Watermelon'];

  return (
    <div>
      <h2>List of Fruits</h2>
      <ul>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;
