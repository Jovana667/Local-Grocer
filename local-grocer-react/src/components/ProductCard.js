import React from 'react';

function ProductCard({ product, onAddToCart }) {
  //                    ↑ These are PROPS (data passed from parent)
  
  return (
    <div className="product-card">
      <div className="product-emoji">{product.emoji}</div>
      <h3>{product.name}</h3>
      <p className="price">${product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;