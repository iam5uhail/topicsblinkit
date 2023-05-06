import React, { useState } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
const Parent = () => {
  const [d, setD] = useState();
  const data = 'data coming parent to child...';

  const callbackdata = (childData) => {
    setD(childData);
  };

  return (
    <div>
      <Child1 data={data} />
      <Child2 data2={callbackdata} />
      {d}
    </div>
  );
};

export default Parent;
