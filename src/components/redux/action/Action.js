import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increament, decreament, byAmount } from '../reducer/CounterSlice';
const Action = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Counter.value);
  const [number, setNumber] = useState();
  const addItems = () => {
    dispatch(increament());
  };
  const minItems = () => {
    dispatch(decreament());
  };
  const change = (e) => {
    setNumber(e.target.value);
  };
  const amount = () => {
    console.log(number);
    dispatch(byAmount(number));
  };
  return (
    <>
      <div>{state}</div>
      <button onClick={addItems}>Add</button>
      <button onClick={minItems}>Min</button>
      <input value={number} onChange={change} />
      <button onClick={amount}>byAmount</button>
    </>
  );
};

export default Action;
