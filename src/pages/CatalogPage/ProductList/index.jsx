import { useEffect, useState } from "react";

import ProductListItem from "../ProductListItem";

import './product-item.css';

const ProductList = () => {
    const [value, setValue] = useState("");
    const [filteredItems, setFiltereItems] = useState(products);
    
    const [stateColor, setStateColor] = useState({
        color: "All colors"
    });
    const [stateType, setStateType] = useState({
        type: "All types"
    });
    const [stateSize, setStateSize] = useState({
        size: "All sizes"
    });

    function handleChangeColor({ target: { name, value } }) {
        setStateColor((prev) => ({ ...prev, [name]: value }));
    }
    function handleChangeType({ target: { name, value } }) {
        setStateType((prev) => ({ ...prev, [name]: value }));
    }
    function handleChangeSize({ target: { name, value } }) {
        setStateSize((prev) => ({ ...prev, [name]: value }));
    }


    if (stateColor.color && stateColor.color !== "All colors") {
        products = products.filter((d) => d.color === stateColor.color);
    } if (stateType.type && stateType.type !== "All types") {
        products = products.filter((d) => d.type === stateType.type);
    }  if (stateSize.size && stateSize.size !== "All sizes") {
        products = products.filter((d) => d.size === stateSize.size);
    }

    useEffect( () => {
      setFiltereItems(products)
    }, [])
    // const filtredItems = data.filter(item => {
    //     return item.title.toLowerCase().includes(value.toLowerCase())
    // })
    
    return (
        <div className="container">
            {/* <div className="filter-nav-bar">
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
                    value={stateColor.color}
                    onChange={handleChangeColor} >
                        <option 
                        value="colors">All colors</option>
                        {products.map((d, i) => (
                        <option key={i}>{d.color}</option>
                        ))}
                    </select>
                    <select 
                    className="filtres-select"
                    id="type"
                    name="type"
                    value={stateType.type}
                    onChange={handleChangeType} >
                        <option value="types">All types</option>
                        {products.map((d, i) => (
                        <option key={i}>{d.type}</option>
                        ))}
                    </select>
                    <select 
                    className="filtres-select"
                    id="size"
                    name="size"
                    value={stateSize.size}
                    onChange={handleChangeSize} >
                        <option value="sizes">All sizes</option>
                        {products.map((d, i) => (
                        <option key={i}>{d.size}</option>
                        ))}
                    </select>
                    <button className="btn btn-danger" type="submit">Apply</button>
                 </div>
            </div> */}
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