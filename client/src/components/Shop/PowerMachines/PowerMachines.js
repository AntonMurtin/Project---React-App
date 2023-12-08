import { useProductContext } from "../../../context/ProductContext"
import { ProductCard } from "../ProductCard/ProductCard";


export const PowerMachines=()=>{
    const {machines}=useProductContext();

    return (
        <section className="container">
            {machines.map(x=>
                <ProductCard key={x._id} {...x}/>)}
        </section>
    )
}