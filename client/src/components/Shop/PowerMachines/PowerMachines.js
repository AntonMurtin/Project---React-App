import { useProductContext } from "../../../context/ProductContext"
import { ProductCard } from "../ProductCard/ProductCard";


export const PowerMachines=()=>{
    const {machines}=useProductContext();

    return (
        <section className="product-page">
            {machines.map(x=>
                <ProductCard key={x._id} {...x}/>)}
        </section>
    )
}