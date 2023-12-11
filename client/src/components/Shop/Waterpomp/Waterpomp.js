import { useProductContext } from '../../../context/ProductContext';
import { ProductCard } from '../ProductCard/ProductCard';

export const Waterpomp = () => {

    const {waterpomps}=useProductContext();
console.log(waterpomps);

    return (
        <section className="page">

            {waterpomps.map(x=>
            <ProductCard key={x._id} {...x}/>
            )}
        </section>
    )
}