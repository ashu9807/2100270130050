import React from 'react';
import { Link } from 'react-router-dom';

function ProductList({ products }) {
  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <h2>{product.productName}</h2>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Discount: {product.discount}%</p>
          <p>Availability: {product.availability}</p>
          <Link to={`/product/${index}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
