import React, { createContext, useState } from 'react';
import './App.css';
import styled from 'styled-components';
// import Counter from './components/Counter';
// import CounterHooks from './components/CounterHooks';
// import FormHooks from './components/FormHooks';
// import ItemHooks from './components/ItemHooks';
// import EffectHooks from './components/EffectHooks';
// import MouseEventEffect from './components/MouseEventEffect';
// import DataFetch from './components/DataFetch';
// import DataFetchById from './components/DataFetchById';
import ComponentC from './components/ComponentC';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserContext = createContext();
export const LanguageContext = createContext();

const App = () => {
  const [user, setUser] = useState({ name: 'yamada', age: '32' });
  const [language, setLanguage] = useState('日本語');

  return (
    <Container>
      <UserContext.Provider value={user}>
        <LanguageContext.Provider value={language}>
          <ComponentC />
        </LanguageContext.Provider>
      </UserContext.Provider>
    </Container>
  );
};

export default App;
