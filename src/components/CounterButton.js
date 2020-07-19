import React, { useState } from 'react';
import styled from 'styled-components';

const Countainer = styled.div``;

const CounterButton = () => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <Countainer>
      <p>You clicked {count} times</p>
      <button onClick={onClick}>click me</button>
    </Countainer>
  );
};

export default CounterButton;
