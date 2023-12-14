import { useProductContext } from "../../../context/ProductContext"
import { ProductCard } from "../ProductCard/ProductCard";


export const PowerMachines=()=>{
    const {machines}=useProductContext();

    return (
        <section className="product-page">
            {machines && machines.map(x =>
                <ProductCard key={x._id} {...x} />
            )}
            {machines.length === 0 && (
                <p className="no-comment">There are no Products yet!</p>
            )}
        </section>
    )
}