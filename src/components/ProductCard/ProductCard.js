// Copyright © 2021 Jonathan Dean Damiani
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css'
import renderHTML from 'react-render-html';
import { ProductController } from '../';
import { CartContext } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { products } = useContext(CartContext);

  const getProduct = () => {
    let productRef = products[products.findIndex(a => a.id === product.id)];
    if (productRef) {
      return productRef.quantity;
    }
    else {
      return 0;
    }
  }

  return (
    <div className="product-card">

      <div className="product-image-container">
        <img className="product-image" src={product.image.src} alt={product.title} />
      </div>

      <h3 className="product-title">{product.title}</h3>
      
      <div className="product-info">
        {renderHTML(product.body_html)}
      </div>
      
      <ProductController product={product} productQuantity={getProduct()}/>
      
    </div>
  )
}

ProductCard.propTypes = {
  product : PropTypes.object.isRequired
}

export default ProductCard;
