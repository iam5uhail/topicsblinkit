import React from 'react';
import { Link } from 'react-router-dom';
const Product = () => {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/product/10">
        <button>ProductDetail</button>
      </Link>
    </div>
  );
};

export default Product;
