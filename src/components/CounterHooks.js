import React, { useState } from 'react';

const CounterHooks = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const incrementCountTen = () => {
    for (let i = 0; i < 10; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Click me</button>
      <button onClick={incrementCountTen}>Click me</button>
    </div>
  );
};

export default CounterHooks;
