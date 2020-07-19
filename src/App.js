import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterButton from './components/CounterButton';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <CounterButton />
      </header>
    </div>
  );
}

export default App;
