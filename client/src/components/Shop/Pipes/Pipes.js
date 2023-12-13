import { useProductContext } from "../../../context/ProductContext"
import { ProductCard } from "../ProductCard/ProductCard";


export const Pipes=()=>{
    const {pipes}=useProductContext();

    return (
        <section className="product-page">
            {pipes.map(x=>
                <ProductCard key={x._id} {...x}/>)}
        </section>
    )
}