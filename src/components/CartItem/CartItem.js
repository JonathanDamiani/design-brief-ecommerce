// Copyright © 2021 Jonathan Dean Damiani
import React from 'react';
import PropTypes from 'prop-types';
import './CartItem.css';
import { ProductController } from '../';

const CartItem = ({ product }) => {
  return (
    <li className="cart-item">

      <div className="cart-image-container">
        <img className="cart-image" src={product.image.src} alt={product.title} />
      </div>

      <div className="cart-item-info">
        <h3 className="cart-item-title">{product.title}</h3>
        <ProductController product={product} productQuantity={product.quantity} useSimbols={true}/>
      </div>

    </li>
  )
}

CartItem.propTypes = {
  product : PropTypes.object.isRequired
}

export default CartItem;
