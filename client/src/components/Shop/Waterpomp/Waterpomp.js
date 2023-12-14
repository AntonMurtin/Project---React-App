import { useProductContext } from '../../../context/ProductContext';
import { ProductCard } from '../ProductCard/ProductCard';

export const Waterpomp = () => {

    const {waterpomps}=useProductContext();


    return (
        <section >
            <div className='product-page'>
            {waterpomps && waterpomps.map(x=>
            <ProductCard key={x._id} {...x}/>
            )}
            {waterpomps.length===0 &&(
                <p className="no-comment">There are no Products yet!</p>
            )}
            </div>
        </section>
    )
}