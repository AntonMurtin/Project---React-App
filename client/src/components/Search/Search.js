import { useEffect, useState } from "react";
import { useProductContext } from "../../context/ProductContext"
import { ProductCard } from "../Shop/ProductCard/ProductCard";
import { productsServiceFactory } from "../../services/productsService";


export const Search=()=>{
    const productsService=productsServiceFactory()
    const {search}=useProductContext();

    const [products,setProducts]=useState([]);
    

    
    useEffect(() => {
        Promise.all([
            productsService.search('waterpomps', search),
            productsService.search('systems', search),
            productsService.search('parts', search),
            productsService.search('machines', search),
            productsService.search('pipes', search),
            productsService.search('tools', search),

        ]).then(([
            waterpompsData,
            systemsData,
            partsData,
            machinesData,
            pipesData,
            toolsData,
        ]) => {
            setProducts([
                ...waterpompsData,
                ...systemsData,
                ...partsData,
                ...machinesData,
                ...pipesData,
                ...toolsData, 
            ]);
        })
    }, [search]);


    return(
        <section className="product-page">

            {products && products.map(x=>
            <ProductCard key={x._id} {...x}/>
            )}
            {products.length===0 &&(
                <p className="no-comment">There are no Products yet!</p>
            )}

        </section>
    )
}