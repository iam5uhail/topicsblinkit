import React, { useMemo } from 'react';
import UseState from './useState/UseState';
import UseEffect from './useEffect/UseEffect';
import UseCustom from './useCustom/UseCustom';
import UseRef from './useRef/UseRef';
import UseMemo from './useMemo/UseMemo';
const Hooks = () => {
  return (
    <div>
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseCustom /> */}
      {/* <UseRef /> */}
      <UseMemo />
    </div>
  );
};

export default Hooks;
