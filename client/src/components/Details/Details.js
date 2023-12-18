import { useEffect, useState } from 'react';
import { Link, useParams,useLocation } from 'react-router-dom'

import { productsServiceFactory } from '../../services/productsService';
import { useAuthContext } from '../../context/AuthContext';
import { useBuyContext } from '../../context/BuyContext';
import { useFavoritContext } from '../../context/FavoritContext';

import { ProductCard } from '../Shop/ProductCard/ProductCard';



export const Details = () => {
    const {type,productId}=useParams();
    const {isAuthenticated,isAdmin,userId}=useAuthContext();
    const {onWish}=useFavoritContext();
    const {onBuy}=useBuyContext()
    
    const [product,setProduct]=useState([]);
    const [products,setProducts]=useState([]);

    const allProducts=products.filter(x=>x._id!==productId);

    const productsService = productsServiceFactory();
    
  

      const { pathname } = useLocation();
    
      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);

    useEffect(() => {
        Promise.all([
            productsService.getAll(type),
            productsService.getBiId(type,productId),
        ]).then(([
            productsData,
            productData,
         
        ]) => {
                setProducts(productsData);
                setProduct(productData);
        })
    }, [productId]);

    return (
        <section className='page'>
            <div id="details">

                <div className="product-details">

                    <span className="details__price">{product.price} $</span>

                    <h1 className="product__title">{product.title}</h1>

                    <div className='description'>
                        <p> {product.description}</p>
                    </div>
                    <div className='quantuty'>
                    {/* <label htmlFor="price">Quantity</label>
                    <input className="search-input searchbar-input"
                        type="number"
                        name='quantity'
                        placeholder="1"
                        id="quantity"
                        onChange={handleChange}
                        value={quantity}
                       
                    /> */}
                    </div>
                    {isAuthenticated && !isAdmin && (
                        <>
                        
                        <Link  className="buy_details btn1 " onClick={()=>{onBuy(type,productId,userId)}}>Buy Now</Link>
                        <Link  className="wish_details btn1" onClick={()=>{onWish(type,productId,userId)}} >Favorit</Link >
                        </>
                    )}
                    {isAdmin &&(
                        <>
                        <Link to={`/shop/${type}/${productId}/edit`} className="buy_details btn1"> Edit </Link>
                        <Link to={`/shop/${type}/${productId}/delete`} className="wish_details btn1" >Delete</Link>
                        </>
                    )}

                </div>

                <div className="product-image">

                    <img src={product.image} alt={product.type} />


                </div>

            </div>
           <div className='details-card'>

            {allProducts.map(x=>
                <ProductCard key={x._id} {...x}/>)}
            </div >
        </section>

    )
}