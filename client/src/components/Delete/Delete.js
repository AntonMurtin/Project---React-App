import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { useAuthContext } from "../../context/AuthContext"
import { productsServiceFactory } from "../../services/productsService";
import { useProductContext } from "../../context/ProductContext";




export const Delete = () => {
    const productsService = productsServiceFactory();
    const {onDelete}=useProductContext()
    const { type, productId } = useParams();
    const { isAdmin } = useAuthContext();
    const [product, setProduct] = useState([])


    
    useEffect(() => {
        productsService.getBiId(type, productId)
            .then(result => {
                setProduct(result)
            })
    }, [productId])
   

    return (
        <section className="product-page">

        

        <div id="details">

            <div className="product-details">

                <h1 className="product__title">Do you want to delete {product.title}</h1>

                {isAdmin && (
                    <>
                        <Link to={`/shop`} className="buy_details btn1" onClick={()=>onDelete(type, productId)} >Delete</Link>
                        <Link to={`/shop/${type}/${productId}/details`} className="wish_details btn1"> Cancel </Link>
                    </>
                )}

            </div>

            <div className="product-image">

                <img src={product.image} alt={product.type} />

            </div>

        </div>
        </section>
    )
}