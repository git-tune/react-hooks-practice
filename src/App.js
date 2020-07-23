import React from 'react';
import './App.css';
import styled from 'styled-components';
import Counter from './components/Counter';
import CounterHooks from './components/CounterHooks';
import FormHooks from './components/FormHooks';
import ItemHooks from './components/ItemHooks';
import EffectHooks from './components/EffectHooks';
import MouseEventEffect from './components/MouseEventEffect';
// import DataFetch from './components/DataFetch';
import DataFetchById from './components/DataFetchById';

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
      <EffectHooks />
      <MouseEventEffect />
      {/* <DataFetch /> */}
      <DataFetchById />
    </Container>
  );
};

export default App;
