import { useAuthContext } from "../../../context/AuthContext"
import { useBuyContext } from "../../../context/BuyContext";


export const BuyProduct=(product)=>{
    const {userId}=useAuthContext();
    const {onRemove}=useBuyContext()
    return(
        <div className='cartShop'>
            <img src={product.image} alt={product.title} />
            <div className='details'>
              <p>{product.title}</p>
              <span className='quantity'>Quantity: 1</span>
              <span className='price'>Price: ${product.price}</span>

            </div>
            <div className='cancel' onClick={()=>onRemove(product.type, product._id, userId)} ><i className="fas fa-window-close"></i></div>
          </div>
    )
}