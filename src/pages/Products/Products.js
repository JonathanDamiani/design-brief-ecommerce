// Copyright © 2021 Jonathan Dean Damiani
import React, { useEffect, useState } from 'react'
import './Products.css'
import axios from 'axios';
import { Cart, ProductsGrid, Header } from '../../components';
import { CartProvider } from '../../context/CartContext';

const apiEndpoint = "data.json"

const Products = () => {
  const [productsData, setProductsData] = useState();

  // Making async request using axios
  // if change the endpoint it should works
  useEffect(() => {
    const getData = async () =>{
      const result = await axios(apiEndpoint);
      setProductsData(result.data.products);
    }
    getData();
  }, [])

  return (
    <CartProvider>

      <Header isTransparent={false}/>

      <div className="container products-container">
        {
          productsData && <ProductsGrid productList={productsData}/>
        }
        <Cart/>
      </div>
      
    </CartProvider>
    
  )
}

export default Products;
