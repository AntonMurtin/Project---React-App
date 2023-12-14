import { useProductContext } from "../../../context/ProductContext";
import { ProductCard } from "../ProductCard/ProductCard";


export const Tools = () => {

    const { tools } = useProductContext()
   
    return (
        <section className="product-page">
            {tools && tools.map(x =>
                <ProductCard key={x._id} {...x} />
            )}
            {tools.length === 0 && (
                <p className="noProduct">There are no Products yet!</p>
            )}
        </section>
    )
}