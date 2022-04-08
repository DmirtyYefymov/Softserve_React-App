import React, { useState } from 'react';
import HeaderNav from '../../components/HeaderNav/HeaderNav';
import ProductList from './ProductList';
import PageFooter from '../../components/PageFooter';

const index = ({products}) => {
  return (
    <>
        <HeaderNav/>
        <ProductList products={products}/>
        <PageFooter/>
    </>
  )
}

export default index