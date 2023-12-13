import { Link } from 'react-router-dom'
import { useProductContext } from '../../../context/ProductContext'
import { useAuthContext } from '../../../context/AuthContext';

export const FavoritProducts = (product) => {
    const { onRemove } = useProductContext();
    const { userId } = useAuthContext();
    return (
        
        <div id="details">
            <div className="product-details">

                <span className="details__price">{product.price} $</span>

                <h1 className="product__title">{product.title}</h1>

                <div className='description'>
                    <p> {product.description}</p>
                </div>

                <Link to={`/buy`} className="buy_details btn1 ">Buy Now</Link>
                <Link className="wish_details btn1"
                    onClick={() => { onRemove(product.type, product._id, userId) }}
                >Remove</Link >

            </div>
            <div className="product-image">

                <img src={product.image} alt={product.type} />

            </div>
        </div>
    )
}