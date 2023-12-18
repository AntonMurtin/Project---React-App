import { useAuthContext } from "../../../context/AuthContext"
import { useBuyContext } from "../../../context/BuyContext";


export const BuyProduct = (product) => {
    const { userId } = useAuthContext();
    const { onRemove, incQty, decQty} = useBuyContext()
  const id=product._id
   
    return (
        <div className='cartShop'>
            <img src={product.image} alt={product.title} />
            <div className='details'>
                <p>{product.title}</p>
                
                <div className="qty" data-phino="Qty">
                    <button type="button" 
                    className="btn btn-qty qty-minus"
                    onClick={()=>incQty(id,'dec')}
                    ><i className="fas fa-minus"></i></button>
                    {/* <input className="hidden" 
                    type="number" 
                    min="1" 
                    max="1" 
                    value="1" 
                    step="1" 
                    readonly="" /> */}
                    <span className="qty-value">{product.quantity}</span>
                    <button type="button" 
                    className="btn btn-qty qty-plus"
                    onClick={()=>incQty(id,'inc')}
                    ><i className="fas fa-plus"></i></button>
                <span className='price'>Price: ${Number(product.price)*product.quantity}</span>
                </div>
                

            </div>
            <div className='cancel' onClick={() => onRemove(product.type, product._id, userId)} ><i className="fas fa-window-close"></i></div>
        </div>
    )
}