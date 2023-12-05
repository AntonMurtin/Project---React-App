import { useWaterpompContext } from '../../../context/WaterpompContext';
import { ProductCard } from '../ProductCard/ProductCard';

export const Waterpomp = () => {

    const {waterpomps}=useWaterpompContext();


    return (
        <section className="container">

            {waterpomps.map(x=>
            <ProductCard key={x._id} {...x}/>
            )}
        </section>
    )
}