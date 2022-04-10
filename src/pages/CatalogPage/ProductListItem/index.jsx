import './product-items-list.css';
import { useNavigate } from 'react-router-dom';


const ProductListItem = ({product}) => {
  const navigate = useNavigate();
  // const handleSingleProductPage = () => {
  //   navigate(`/singleProduct/${product.id}`);
  // }
    return (
        <div className="card-item">
            <img className='card-image' src={product.imgUrl} alt="sss" />
            <div className='card-body'>
                <h4 className='card-title'>{product.title}</h4>
                <p className='card-text'>{product.description}</p>
            </div>
            <div className="card-price">
                <h5 className="price-txt">Price</h5>
                <div className="price-dollar">{product.price + '$'}</div>
            </div>
            {/* <button className="btn btn-danger" type="button" onClick={handleSingleProductPage}> */}
            <button className="btn btn-danger" type="button">
              View more
            </button>
        </div>
    );
}

export default ProductListItem