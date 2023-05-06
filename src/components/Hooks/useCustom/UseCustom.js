import React, { useState } from 'react';
import UseTitle from './UseTiltle';

const UseCustom = () => {
  const [count, setCount] = useState(0);
  UseTitle(count);
  const counter = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={counter}>click me</button>
    </div>
  );
};

export default UseCustom;
