import React from 'react';

const Child2 = ({ data2 }) => {
  const data = 'data coming child to parent...';
  const handleClick = () => {
    alert('hello');
    console.log(data2);
    data2(data);
  };
  return (
    <div>
      <button onClick={handleClick}>send data</button>
    </div>
  );
};

export default Child2;
