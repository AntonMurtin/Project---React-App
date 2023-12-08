import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { useAuthContext } from "../../context/AuthContext"
import { productsServiceFactory } from "../../services/productsService";




export const Delete = () => {
    const productsService = productsServiceFactory();
    const { type, productId } = useParams();
    const { isAdmin } = useAuthContext();
    const [product, setProduct] = useState([])

    console.log(type);
    console.log(productId);
    
    useEffect(() => {
        productsService.getBiId(type, productId)
            .then(result => {
                setProduct(result)
            })
    }, [productId])
    console.log(product);

    const onDelete=async()=>{
        console.log('delete');
        try {
            await productsService.del(type,productId)
            
        } catch (error) {
            console.log(error.message);
        }
    }

    return (


        <div id="details">

            <div className="product-details">

                <h1 className="product__title">Do you want to delete {product.title}</h1>

                {isAdmin && (
                    <>
                        <Link to={`/shop`} className="buy_details btn1" onClick={onDelete} >Delete</Link>
                        <Link to={`/shop/${type}/${productId}/details`} className="wish_details btn1"> Cancel </Link>
                    </>
                )}

            </div>

            <div className="product-image">

                <img src={product.image} alt={product.type} />

            </div>

        </div>

    )
}