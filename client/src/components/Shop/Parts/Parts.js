import { usePartsContext } from "../../../context/PartsContext";
import { ProductCard } from "../ProductCard/ProductCard";


export const Parts=()=>{

    const {parts}=usePartsContext()
    return(
        <section className="container">

            {parts.map(x=>
            <ProductCard key={x._id} {...x}/>
            )}
        </section>
    )
}