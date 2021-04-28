// Copyright © 2021 Jonathan Dean Damiani
import React, { createContext, useReducer } from 'react';
import CartReducer from './CartReducer';

const initialState = {
  products: []
};

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const updateProduct = (product) => {
    dispatch({
      type: 'UPDATE_PRODUCT',
      payload: product
    });
  }

  const removeProduct = (product) => {
    dispatch({
      type: 'REMOVE_PRODUCT',
      payload: product
    });
  }

  return (
    <CartContext.Provider value={{
      products: state.products,
      updateProduct,
      removeProduct
    }}>
      {children}
    </CartContext.Provider>
  )
}