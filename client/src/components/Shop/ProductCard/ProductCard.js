import { Link } from 'react-router-dom'

import { useAuthContext } from '../../../context/AuthContext';
import { useBuyContext } from '../../../context/BuyContext';

export const ProductCard = (data) => {
    const { isAuthenticated, isAdmin, userId } = useAuthContext()
    const { onBuy } = useBuyContext()
    return (
        <div className="product">
            <span className="product__price">{data.price} $</span>
            <div className='syze'><img className="product__image" src={data.image} /></div>
            <div className='syze'><h1 className="product__title">{data.title}</h1></div>
            {isAuthenticated && !isAdmin && (
                <Link className="buy__btn btn1"
                    onClick={() => onBuy(data.type, data._id, userId)}
                >Buy Now</Link>
            )}
            <Link to={`/shop/${data.type}/${data._id}/details`} className="details__btn btn1">Details</Link>
        </div>
    );
}

