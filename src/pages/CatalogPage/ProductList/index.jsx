import React, { useState, useEffect } from "react";

import ProductListItem from "../ProductListItem";

import './product-item.css';

const ProductList = ({products}) => {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [state, setState] = useState({
        color: "All colors",
        type: "All types",
        size: "All sizes"
    });

    function handleChange({ target: { name, value } }) {
        setState( prev => ({ ...prev, [name]: value }));
    }

    useEffect( () => {
      let filteredProds = products;
      if (!!state.color && state.color !== "All colors") {
        filteredProds = filteredProds.filter( product => product.color[0] === state.color)
      }
      if (!!state.type && state.type !== "All types") {
        filteredProds = filteredProds.filter( product => product.type === state.type)
      }
      if (!!state.size && state.size !== "All sizes") {
        filteredProds = filteredProds.filter( product => product.size[0] === state.size)
      }
      setFilteredProducts(filteredProds);
    }, [state])


    const handleSearchFilter = (e) => {
        const filteredBySearchString = products.filter(item => {
          return item.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setFilteredProducts(filteredBySearchString);
    }
    return (
        <div className="container">
            <div className="filter-nav-bar">
                <div className="search">
                    <input type="search" 
                    placeholder="Search"
                    onChange={handleSearchFilter}/>
                </div>
                <div className="filtres">
                    <select 
                    className="filtres-select"
                    id="color"
                    name="color"
                    value={state.color}
                    onChange={handleChange} >
                        <option value="All colors">All colors</option>
                        {products.map((d, i) => (
                        <option key={i}>{d.color[0]}</option>
                        ))}
                    </select>
                    <select 
                    className="filtres-select"
                    id="type"
                    name="type"
                    value={state.type}
                    onChange={handleChange} >
                        <option value="All types">All types</option>
                        {products.map((d, i) => (
                        <option key={i}>{d.type}</option>
                        ))}
                    </select>
                    <select 
                    className="filtres-select"
                    id="size"
                    name="size"
                    value={state.size}
                    onChange={handleChange} >
                        <option value="All sizes">All sizes</option>
                        {products.map((d, i) => (
                        <option key={i}>{d.size[0]}</option>
                        ))}
                    </select>
                    <button className="btn btn-danger" type="submit">Apply</button>
                 </div>
            </div>
            <div className="items d-flex justify-content-between">
                {filteredProducts.map(item => {
                    const{id} = item;
                    return (
                        <ProductListItem key={id} product={item}/>
                    )
                })}
            </div>
        </div>
    );
}

export default ProductList