import React, { useState } from 'react';
const UseState = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
      <span>{counter}</span>
      <button onClick={() => setCounter(counter - 1)}>Min</button>
    </div>
  );
};

export default UseState;

// in useState we declare a contant variable and later we change it by the event handler
// after setting a new value as it gives us two values.
