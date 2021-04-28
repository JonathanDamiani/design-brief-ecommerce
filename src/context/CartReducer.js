// Copyright © 2021 Jonathan Dean Damiani
const CartReducer = (state, action) => {
  let product = action.payload;
  switch (action.type) {
    case "UPDATE_PRODUCT":
      let isNew = true;

      // Check if already exist
      state.products.forEach(element => {
        if (element.id === product.id) {
          isNew = false;
        }
      });

      // If is new
      if (isNew) {
        return {
          ...state,
          products: [...state.products, product]
        };
      }

      return {
        ...state,
        products: state.products.map(prod => {
          if (prod.id === product.id) {
            return product;
          }
          return prod;
        })
      };
      
    case "REMOVE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (prod) => prod.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default CartReducer;