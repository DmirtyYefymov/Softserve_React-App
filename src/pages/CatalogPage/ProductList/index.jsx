import ProductListItem from "../ProductListItem";

import './product-item.css';

const ProductList = ({data}) => {

    const products = data.map(item => {
        return (
            <ProductListItem {...item}/>
        )
    })

    return (
        <div className="container d-flex justify-content-between">
            {products}
        </div>
    );
}

export default ProductList