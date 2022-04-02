import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CatalogPage from '../pages/CatalogPage';
import CartPage from '../pages/CartPage';

const MainRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/catalog" element={<CatalogPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
    </Routes>
  )
};

export default MainRouter;