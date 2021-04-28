// Copyright © 2021 Jonathan Dean Damiani
import React from 'react';
import PropTypes from 'prop-types';
import './ProductsGrid.css';
import { ProductCard } from '../';

const ProductsGrid = ({ productList }) => {
  return (
    <div className="products-grid-container">

      <h2 className="products-grid-title">Choose your items</h2>

      <p className="products-grid-description">
        Add or Remove items from your cart!
      </p>
      
      <div className="products-grid">
        {
          productList && productList.map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
              />
            )
        })}   
      </div>
      
    </div>
  )
}

ProductsGrid.propTypes = {
  productList : PropTypes.array,
}

export default ProductsGrid;
