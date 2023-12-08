import { Link, useParams } from 'react-router-dom'


import { useEffect, useState } from 'react';
import { productsServiceFactory } from '../../services/productsService';
import { ProductCard } from '../Shop/ProductCard/ProductCard';
import { useAuthContext } from '../../context/AuthContext';


export const Details = () => {
    const {type,productId}=useParams();
    const {isAuthenticated,isAdmin}=useAuthContext()
    
    const [product,setProduct]=useState([]);
    const [products,setProducts]=useState([]);
    const allProducts=products.filter(x=>x._id!==productId);

    const productsServise = productsServiceFactory();

    useEffect(() => {
        Promise.all([
            productsServise.getAll(type),
            productsServise.getBiId(type,productId),
        ]).then(([
            productsData,
            productData,
         
        ]) => {
                setProducts(productsData);
                setProduct(productData);
        })
    }, [productId]);

    return (
        <div className='login'>
            <div id="details">

                <div className="product-details">

                    <span className="details__price">{product.price} $</span>

                    <h1 className="product__title">{product.title}</h1>

                    <div className='description'>
                        <p> {product.description}</p>
                    </div>
                    {isAuthenticated && !isAdmin && (
                        <>
                        <Link to="#" className="buy_details btn1">Buy Now</Link>
                        <Link to="#" className="wish_details btn1" >WISH</Link>
                        </>
                    )}
                    {isAdmin &&(
                        <>
                        <Link to={`/shop/${type}/${productId}/edit`} className="buy_details btn1"> Edit </Link>
                        <Link to="#" className="wish_details btn1" >Delete</Link>
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