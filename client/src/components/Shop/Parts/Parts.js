import { useProductContext } from "../../../context/ProductContext";
import { ProductCard } from "../ProductCard/ProductCard";


export const Parts = () => {

    const { parts } = useProductContext()
    return (
        <section className="product-page">
            {parts && parts.map(x =>
                <ProductCard key={x._id} {...x} />
            )}
            {parts.length === 0 && (
                <p className="no-comment">There are no Products yet!</p>
            )}
        </section>
    )
}