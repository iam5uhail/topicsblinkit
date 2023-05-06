import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Product from './Product';
import NoMatch from './NoMatch';
import ProductDetail from './ProductDetail';
import Admin from './Admin';
const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/product'} element={<Product />} />
          <Route path={'/product/:productId'} element={<ProductDetail />} />
          <Route path={'/product/admin'} element={<Admin />} />
          <Route path={'*'} element={<NoMatch />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routing;
