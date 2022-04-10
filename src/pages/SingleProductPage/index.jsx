import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './single-page.css';
import HeaderNav from '../../components/HeaderNav/HeaderNav';
import PageFooter from '../../components/PageFooter';

const SingleProduct = ({ products }) => {
  const {id} = useParams();
  const [product, setProduct] = useState({
    size: [],
    color:[]
  });
  useEffect( () => {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == id) {
        setProduct(products[i])
      }
    }
  }, [])
  return (
    <>
    <HeaderNav/>
    <div className='main-container'>
      <div className='main-img-container shadow p-3 mb-5 bg-white rounded'><img className='main-product-img' src={product.imgUrl} alt="" /></div>
      <div>
        <h3><b>{product.title}</b></h3>
        <div className='product-parameters-container'>
          {product.size.map( size => {
            if (size === sizeRef.current) {
              return (
                <div className='product-parameters-box shadow p-3 mb-5 bg-white rounded' key={size}>{size}</div>
              )
            } else return (
              <div className='product-parameters-box' key={size}>{size}</div>
            )
          })}
        </div>
        <div className='product-parameters-container'>
          {product.color.map( color => {
            if (color === colorRef.current) {
              return (
                <div 
                  className='product-parameters-box shadow p-3 mb-5 bg-white rounded' 
                  key={color}
                  style={{backgroundColor: color}}
                ></div>
              )
            } else return (
              <div className='product-parameters-box' 
                style={{backgroundColor: color}} key={color}
              ></div>
            )
          })}
          </div>
        <p>{product.description}</p>
        <div className='priceContainer shadow p-3 mb-5 bg-white rounded'><b>{product.price}</b> UAH</div>
      </div>
    </div>
    <PageFooter/>
  </>
  )
};

export default SingleProduct