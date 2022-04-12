import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'

import HomePage from '../pages/HomePage';
import CatalogPage from '../pages/CatalogPage';
import CartPage from '../pages/CartPage';
import SingleProduct from '../pages/SingleProductPage';
import LoadingPersonsData from '../components/General/LoadingPersonData/LoadingPersonData';

const MainRouter = () => {


  const [products, setProducts] = useState({
    loading: false,
    products: null,
  });
  const DataLoading = LoadingPersonsData(products);

  // useEffect(() => {
  //   fetch('http://localhost:3001/products') 
  //     .then(res => res.json())
  //     .then(prods => setProducts(prods))
  // }, [])


  
  useEffect(() => {
    setProducts({loading: true})
    const apiUrl = './db.json';
    axios.get(apiUrl).then((res) => {
      const prods = res.json();
      setProducts({
        loading: false,
        persons: prods
      });
    });
  }, [setProducts]);

  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/catalog" element={<CatalogPage products={products}/>} element={<DataLoading isLoading={products.loading} persons={products.persons} />}/>
        <Route path="/singleProduct/:id" element={<SingleProduct products={products}/>}/>
        <Route path="/cart" element={<CartPage/>}/>
    </Routes>
  )
};

export default MainRouter;