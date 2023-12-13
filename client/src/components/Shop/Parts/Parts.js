import { useProductContext } from "../../../context/ProductContext";
import { ProductCard } from "../ProductCard/ProductCard";


export const Parts=()=>{

    const {parts}=useProductContext()
    return(
        <section className="product-page">

            {parts.map(x=>
            <ProductCard key={x._id} {...x}/>
            )}
        </section>
    )
}