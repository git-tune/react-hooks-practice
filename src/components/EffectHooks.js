import React, { useState, useEffect } from 'react';

const EffectHooks = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = `${count}`;
    console.log('render');
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
    </div>
  );
};

export default EffectHooks;
