import React, { useEffect, useState } from 'react';

const PostApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    CallingPostApi();
  }, []);
  const CallingPostApi = async () => {
    const response = await fetch(
      'https://multipro.cssrender.com/api/homepage',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lat: 28.58436,
          lng: 77.309647,
        }),
      }
    );
    const data = await response.json();
    setData(data.home_category);
    console.log(data);
  };
  return (
    <div>
      {data.map((item) => (
        <>
          <div key={item.cat_id}>
            <h1>{item.title}</h1>
          </div>
          {item.data.map((i) => (
            <div key={i.p_id}>{i.product_name}</div>
          ))}
        </>
      ))}
    </div>
  );
};

export default PostApi;
