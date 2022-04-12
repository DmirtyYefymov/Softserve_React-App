import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CatalogPage from '../pages/CatalogPage';
import CartPage from '../pages/CartPage';
import SingleProduct from '../pages/SingleProductPage';

const MainRouter = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products') 
      .then(res => res.json())
      .then(prods => setProducts(prods))
  }, [])
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/catalog" element={<CatalogPage products={products}/>}/>
        <Route path="/singleProduct/:id" element={<SingleProduct products={products}/>}/>
        <Route path="/cart" element={<CartPage/>}/>
    </Routes>
  )
};

export default MainRouter;