import React from 'react';
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
  const params = useParams();
  const ProductId = params.productId;
  return <div>ProductDetail {ProductId}</div>;
};

export default ProductDetail;
