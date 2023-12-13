import { useProductContext } from "../../../context/ProductContext";
import { ProductCard } from "../ProductCard/ProductCard";


export const IrrigationSystems=()=>{

    const {systems}=useProductContext()
    return(
        <section className="product-page">

            {systems.map(x=>
            <ProductCard key={x._id} {...x}/>
            )}
        </section>
    )
}