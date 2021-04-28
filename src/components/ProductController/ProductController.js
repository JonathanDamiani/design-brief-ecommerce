// Copyright © 2021 Jonathan Dean Damiani
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import "./ProductController.css"
import { CartContext } from '../../context/CartContext';

const ProductController = ({ product, productQuantity, useSimbols }) => {
  const {updateProduct, removeProduct, products} = useContext(CartContext);
  
  const HandleAddToCart = () => {
    let productRef = products[products.findIndex(a => a.id === product.id)];

    if (productRef) {
      let newProduct = {...product, quantity: productRef.quantity + 1}
      updateProduct(newProduct);
    }
    else {
      let newProduct = {...product, quantity: 1}
      updateProduct(newProduct);
    }
  }

  const HandleRemoveFromCart = () => {
    let productRef = products[products.findIndex(a => a.id === product.id)];

    if (productRef) {
        let newProduct = {...product, quantity: productRef.quantity - 1}
        if (newProduct.quantity === 0) {
          removeProduct(newProduct);
        }
        else {
          updateProduct(newProduct);
        }
    }
  }

  return (
    <div className="buttons-container">
    {
      useSimbols 
      ?
        <>
          <button className="button-base product-button-controller product-button-symbols" onClick={HandleRemoveFromCart}>-</button>
          <span className="product-quantity">{productQuantity}</span>
          <button className="button-base product-button-controller product-button-symbols" onClick={HandleAddToCart}>+</button>
        </>
      :
      <>
        <button className="button-base product-button-controller" onClick={HandleRemoveFromCart}>remove</button>
        <span className="product-quantity">{productQuantity}</span>
        <button className=" button-base product-button-controller" onClick={HandleAddToCart}>add</button>
      </>
    }
        
     </div>
  )
}

ProductController.defaultProps = {
  productQuantity: 0,
  useSimbols: false
}

ProductController.propTypes = {
  product : PropTypes.object.isRequired,
  productQuantity: PropTypes.number,
  useSimbols: PropTypes.bool
}

export default ProductController;
