import { useProductContext } from '../../../context/ProductContext';
import { ProductCard } from '../ProductCard/ProductCard';

export const Waterpomp = () => {

    const {waterpomps}=useProductContext();


    return (
        <section className="container">

            {waterpomps.map(x=>
            <ProductCard key={x._id} {...x}/>
            )}
        </section>
    )
}