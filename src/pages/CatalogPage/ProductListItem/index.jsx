import './product-items-list.css';


const ProductListItem = ({title, description, imgUrl, price}) => {
    return (
        <div className="card-item">
            <img className='card-image' src={imgUrl} alt="sss" />
            <div className='card-body'>
                <h4 className='card-title'>{title}</h4>
                <p className='card-text'>{description}</p>
            </div>
            <div className="card-price">
                <h5 className="price-txt">Price</h5>
                <div className="price-dollar">{price + '$'}</div>
            </div>
            <button className="btn btn-danger" type="button">View more</button>
        </div>
    );
}

export default ProductListItem