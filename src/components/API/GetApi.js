import React, { useState, useEffect } from 'react';

const GetApi = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    CallingGetApi();
  }, []);

  const CallingGetApi = async () => {
    const response = await fetch('https://swapi.dev/api/films');
    const data = await response.json();
    setData(data.results);
    console.log(data.results);
  };
  return (
    <div>
      {data.map((item) => (
        <div>
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default GetApi;
