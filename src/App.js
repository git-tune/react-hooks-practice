import React from 'react';
import './App.css';
import styled from 'styled-components';
import CounterReducer from './components/CounterReducer';
// import Counter from './components/Counter';
// import CounterHooks from './components/CounterHooks';
// import FormHooks from './components/FormHooks';
// import ItemHooks from './components/ItemHooks';
// import EffectHooks from './components/EffectHooks';
// import MouseEventEffect from './components/MouseEventEffect';
// import DataFetch from './components/DataFetch';
// import DataFetchById from './components/DataFetchById';
// import ComponentC from './components/ComponentC';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// export const UserContext = createContext();
// export const LanguageContext = createContext();

const App = () => {
  //   const [user, setUser] = useState({ name: 'yamada', age: '32' });
  //   const [language, setLanguage] = useState('日本語');

  return (
    <Container>
      <CounterReducer />
    </Container>
  );
};

export default App;
