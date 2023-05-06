import React, { useRef } from 'react';

const UseRef = () => {
  const inputRef = useRef(null);
  const handle = () => {
    console.log('function called');
    inputRef.current.value = 20;
    inputRef.current.focus();
  };
  return (
    <div className="App">
      <h1>useRef in React</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handle}>Handle input</button>
    </div>
  );
};

export default UseRef;
