/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo } from 'react';

const UseMemo = () => {
  const [count1, setCount1] = useState(0);
  const [count10, setCount10] = useState(0);

  const multimemo = useMemo(
    function hello() {
      console.log('hello');
    },
    [count1]
  );

  const counter1 = () => {
    setCount1(count1 + 1);
  };
  const counter10 = () => {
    setCount10(count10 + 10);
  };
  return (
    <div>
      <h1>{multimemo}</h1>
      <h1>{count1}</h1>
      <h1>{count10}</h1>
      <button onClick={counter1}>count1</button>
      <button onClick={counter10}>count10</button>
    </div>
  );
};

export default UseMemo;
