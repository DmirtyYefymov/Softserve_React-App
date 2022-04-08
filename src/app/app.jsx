import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from '../router';

import './app.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products') 
      .then(res => res.json())
      .then(prods => setProducts(prods))
  }, [])
    return(
        <BrowserRouter>
            <MainRouter products={products}/>
        </BrowserRouter>
    );
}

export default App;