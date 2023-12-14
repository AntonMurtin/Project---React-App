import { useProductContext } from "../../../context/ProductContext"
import { ProductCard } from "../ProductCard/ProductCard";


export const Pipes=()=>{
    const {pipes}=useProductContext();

    return (
        <section className="product-page">
             {pipes && pipes.map(x =>
                <ProductCard key={x._id} {...x} />
            )}
            {pipes.length === 0 && (
                <p className="noProduct">There are no Products yet!</p>
            )}
        </section>
    )
}