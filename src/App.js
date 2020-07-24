import React, { useReducer, createContext } from 'react';
import './App.css';
import styled from 'styled-components';
// import CounterReducer from './components/CounterReducer';
// import Counter from './components/Counter';
// import CounterHooks from './components/CounterHooks';
// import FormHooks from './components/FormHooks';
// import ItemHooks from './components/ItemHooks';
// import EffectHooks from './components/EffectHooks';
// import MouseEventEffect from './components/MouseEventEffect';
// import DataFetch from './components/DataFetch';
// import DataFetchById from './components/DataFetchById';
// import ComponentC from './components/ComponentC';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CountContext = createContext();

const initialState = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment1':
      return { ...state, firstCounter: state.firstCounter + action.value };
    case 'decrement1':
      return { ...state, firstCounter: state.firstCounter - action.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const App = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <Container>
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <h1>count: {count.firstCounter}</h1>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </Container>
  );
};

export default App;
