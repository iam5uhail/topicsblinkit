import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
const Home = () => {
  return (
    <>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/product">
        <button>Product</button>
      </Link>
    </>
  );
};

export default Home;
