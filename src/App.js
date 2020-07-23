import React from 'react';
import './App.css';

const App = () => {
  const profiles = [
    { name: 'tune', age: 24 },
    { name: 'tuna', age: 22 },
    { name: 'tuni' },
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </div>
  );
};

const User = (props) => {
  return (
    <h1>
      Hi! I am {props.name} and {props.age} years old.
    </h1>
  );
};

User.defaultProps = {
  age: 20,
};

export default App;
