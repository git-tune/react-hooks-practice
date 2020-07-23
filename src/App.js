import React from 'react';
import './App.css';
import styled from 'styled-components';
import Counter from './components/Counter';
import CounterHooks from './components/CounterHooks';
import FormHooks from './components/FormHooks';
import ItemHooks from './components/ItemHooks';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <Counter />
      <CounterHooks />
      <FormHooks />
      <ItemHooks />
    </Container>
  );
};

export default App;
