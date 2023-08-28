import React, { useState } from 'react';

const Counter = ({ initialValue }) => {
  const [counterValue, setCounterValue] = useState(initialValue);

  const incrementCounter = () => {
    setCounterValue(prevValue => prevValue + 1);
  };

  const decrementCounter = () => {
    if (counterValue > 0) {
      setCounterValue(prevValue => prevValue - 1);
    }
  };

  return (
    <div>
      <h1>Counter Value: {counterValue}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
};

export default Counter;
