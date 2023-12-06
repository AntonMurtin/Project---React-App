import { useProductContext } from "../../../context/ProductContext";
import { ProductCard } from "../ProductCard/ProductCard";


export const Tools=()=>{

    const {tools}=useProductContext()
    return(
        <section className="container">

            {tools.map(x=>
            <ProductCard key={x._id} {...x}/>
            )}
        </section>
    )
}