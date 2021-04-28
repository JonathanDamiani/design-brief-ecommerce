// Copyright © 2021 Jonathan Dean Damiani
import React, { useContext, useState, useEffect } from 'react';
import './Cart.css';
import { CartContext } from '../../context/CartContext';
import { CartItem } from '../';

const Cart = () => {
  const { products } = useContext(CartContext);
  const [cartPositionClass, setCartPositionClass] = useState("cart-container cart-position-relative");
  
  useEffect(() => {
    
    // Handle scrool 
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 80) {
        setCartPositionClass("cart-container cart-position-fixed")
      }
      else {
        setCartPositionClass("cart-container cart-position-relative")
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <div className={cartPositionClass}>
      <div className="cart">

        <h2 className="cart-title">
          cart
        </h2>

        <ul className="cart-list">
          { products.map((product)=> {
            return (
              <CartItem
                key={product.id}
                product={product}
              /> 
            );
          })}
        </ul>

        <button className="button-base cart-submit-button">
          Continue
        </button>
        
      </div>
    </div>
  )
}

export default Cart;
