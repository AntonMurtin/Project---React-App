import { Link } from 'react-router-dom'
import { useAuthContext } from '../../../context/AuthContext';
import { useFavoritContext } from '../../../context/FavoritContext';
import { useBuyContext } from '../../../context/BuyContext';

export const FavoritProducts = (product) => {
    const { userId } = useAuthContext();
    const { onRemove } = useFavoritContext();
    const {onBuy}=useBuyContext()
    return (
        
        <div id="details">
            <div className="product-details">

                <span className="details__price">{product.price} $</span>

                <h1 className="product__title">{product.title}</h1>

                <div className='description'>
                    <p> {product.description}</p>
                </div>

                <Link className="buy_details btn1"
                onClick={(()=>(onBuy(product.type, product._id, userId)))}
                >Buy Now</Link>
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