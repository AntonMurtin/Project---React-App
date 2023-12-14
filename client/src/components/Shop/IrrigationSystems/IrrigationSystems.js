import { useProductContext } from "../../../context/ProductContext";
import { ProductCard } from "../ProductCard/ProductCard";


export const IrrigationSystems = () => {

    const { systems } = useProductContext()
    return (
        <section className="product-page">
            {systems && systems.map(x =>
                <ProductCard key={x._id} {...x} />
            )}
            {systems.length === 0 && (
                <p className="noProduct">There are no Products yet!</p>
            )}
        </section>
    )
}