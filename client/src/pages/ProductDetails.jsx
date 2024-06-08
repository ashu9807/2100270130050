
import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails({ products }) {
  const { id } = useParams();
  const product = products[id];

  if (!product) return <p>Product not found.</p>;

  return (
    <div>
      <h1>{product.productName}</h1>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability}</p>
    </div>
  );
}

export default ProductDetails;
