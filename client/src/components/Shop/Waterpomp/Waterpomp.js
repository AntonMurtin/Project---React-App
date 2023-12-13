import { useProductContext } from '../../../context/ProductContext';
import { ProductCard } from '../ProductCard/ProductCard';

export const Waterpomp = () => {

    const {waterpomps}=useProductContext();


    return (
        <section >
            <div className='product-page'>
            {waterpomps.map(x=>
            <ProductCard key={x._id} {...x}/>
            )}
            </div>
        </section>
    )
}