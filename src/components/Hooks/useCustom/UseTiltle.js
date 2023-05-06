import React, { useEffect } from 'react';

const UseTitle = (props) => {
  useEffect(() => {
    document.title = props + 'times';
  });
  return <div></div>;
};

export default UseTitle;
