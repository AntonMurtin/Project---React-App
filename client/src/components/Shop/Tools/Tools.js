import { usePartsContext } from "../../../context/PartsContext";
import { ProductCard } from "../ProductCard/ProductCard";


export const Tools=()=>{

    const {tools}=usePartsContext()
    return(
        <section className="container">

            {tools.map(x=>
            <ProductCard key={x._id} {...x}/>
            )}
        </section>
    )
}