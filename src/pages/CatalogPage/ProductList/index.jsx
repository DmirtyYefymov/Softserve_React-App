import { useState } from "react";

import ProductListItem from "../ProductListItem";

import './product-item.css';

const ProductList = ({products}) => {
    const [value, setValue] = useState("");

    
    const [state, setState] = useState({
        color: "All colors",
        type: "All types",
        size: "All sizes"
    });

    function handleChange({ target: { name, value } }) {
        setState((prev) => ({ ...prev, [name]: value }));
    }
    if (state.color && state.color !== "All colors") {
        products = products.filter((d) => d.color === state.color);
    } if (state.type && state.type !== "All types") {
        products = products.filter((d) => d.type === state.type);
    }  if (state.size && state.size !== "All sizes") {
        products = products.filter((d) => d.size === state.size);
    }
    // let data = state.data;


    const filtredItems = data.filter(item => {
        return item.title.toLowerCase().includes(value.toLowerCase())
    })
    return (
        <div className="container">
            <div className="filter-nav-bar">
                <div className="search">
                    <input type="search" 
                    placeholder="Search"
                    onChange={(event) => setValue(event.target.value)}/>
                </div>
                <div className="filtres">
                    <select 
                    className="filtres-select"
                    id="color"
                    name="color"
                    value={state.color}
                    onChange={handleChange} >
                        <option value="color">All colors</option>
                        {state.data.map((d, i) => (
                        <option key={i}>{d.color}</option>
                        ))}
                    </select>
                    <select 
                    className="filtres-select"
                    id="type"
                    name="type"
                    value={state.type}
                    onChange={handleChange} >
                        <option value="type">All types</option>
                        {state.data.map((d, i) => (
                        <option key={i}>{d.type}</option>
                        ))}
                    </select>
                    <select 
                    className="filtres-select"
                    onChange={handleChange} >
                        <option value="size">All sizes</option>
                        {state.data.map((d, i) => (
                        <option key={i}>{d.size}</option>
                        ))}
                    </select>
                    <button className="btn btn-danger" type="submit">Apply</button>
                 </div>
            </div>
            <div className="items d-flex justify-content-between">
                {products.map(item => {
                    const{id, ...itemProps} = item;
                    return (
                        <ProductListItem key={id} product={item} {...itemProps}/>
                    )
                })}
            </div>
        </div>
    );
}

export default ProductList