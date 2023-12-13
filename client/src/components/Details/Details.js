import { Link, useParams,useLocation } from 'react-router-dom'


import { useEffect, useState } from 'react';
import { productsServiceFactory } from '../../services/productsService';
import { ProductCard } from '../Shop/ProductCard/ProductCard';
import { useAuthContext } from '../../context/AuthContext';
import { useProductContext } from '../../context/ProductContext';


export const Details = () => {
    const {type,productId}=useParams();
    const {isAuthenticated,isAdmin,userId}=useAuthContext();
    const {onWish}=useProductContext()
    
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

    // const onWish=async(type,productId,userId)=>{
    //     try {
    //         await productsService.wish(type,productId,{userId})
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }

    return (
        <div className='new-size'>
            <div id="details">

                <div className="product-details">

                    <span className="details__price">{product.price} $</span>

                    <h1 className="product__title">{product.title}</h1>

                    <div className='description'>
                        <p> {product.description}</p>
                    </div>
                    {isAuthenticated && !isAdmin && (
                        <>
                        
                        <Link to={`/shop`} className="buy_details btn1 ">Buy Now</Link>
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
           

            {allProducts.map(x=>
                <ProductCard key={x._id} {...x}/>)}
            
        </div>

    )
}