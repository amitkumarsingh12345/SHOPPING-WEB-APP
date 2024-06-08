import axios from 'axios';
import React, { useEffect } from 'react'

const Products = () => {
  const ProductHandler = async() => {
     const data = await axios.get(`http://localhost:11000/product/${id}`);
  }
  useEffect( () => {
    ProductHandler();
  },[]);

  return (
    <div className='container'>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
    </div>
  )
}

export default Products
