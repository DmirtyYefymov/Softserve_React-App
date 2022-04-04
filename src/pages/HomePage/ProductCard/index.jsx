import React from 'react';
import "./product-card.css";

const ProductCard = ({imgUrl, title, description}) => {
  return (
    <div 
        className='card product-card-container shadow p-3 mb-5 bg-body rounded col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3'
    >
        <img className='card-image-top' src={imgUrl} alt="" />
        <div className='card-body product-card-body '>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text'>{description}</p>
        </div>
    </div>
  )
}

export default ProductCard