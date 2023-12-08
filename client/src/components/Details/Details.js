import { Link, useParams } from 'react-router-dom'

import { useProductContext } from "../../context/ProductContext"
import { useEffect, useState } from 'react';
import { productsServiceFactory } from '../../services/productsService';
import { ProductCard } from '../Shop/ProductCard/ProductCard';


export const Details = () => {
    const {type,productId}=useParams();
    
    const [product,setProduct]=useState([]);
    const [products,setProducts]=useState([]);

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
    }, []);

    return (
        <div className='login'>
            <div id="details">

                <div className="product-details">

                    <span className="details__price">{product.price} $</span>

                    <h1 className="product__title">{product.title}</h1>

                    <div className='description'>
                        <p> {product.description}</p>
                    </div>
                <Link to="#" className="buy_details btn1">Buy Now</Link>
                <Link to="#" className="wish_details btn1" >WISH</Link>

                </div>

                <div className="product-image">

                    <img src={product.image} alt={product.type} />


                </div>

            </div>
            {products.map(x=>
                <ProductCard key={x._id} {...x}/>)}
        </div>

    )
}