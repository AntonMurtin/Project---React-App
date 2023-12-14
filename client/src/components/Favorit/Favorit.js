import { useEffect, useState } from "react"
import { productsServiceFactory } from "../../services/productsService";
import { useAuthContext } from "../../context/AuthContext";
// import { useProductContext } from "../../context/ProductContext";
import { FavoritProducts } from "./FavoritProducts/FavoritProducts";
import { useLocation } from "react-router-dom";




export const Favorit = () => {

    const productsService = productsServiceFactory();
    const { userId } = useAuthContext()
   

    const [favorits, setFavorits] = useState([]);
    const { pathname } = useLocation();
    
      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);

    useEffect(() => {
        Promise.all([
            productsService.getWish('waterpomps', userId),
            productsService.getWish('systems', userId),
            productsService.getWish('parts', userId),
            productsService.getWish('machines', userId),
            productsService.getWish('pipes', userId),
            productsService.getWish('tools', userId),

        ]).then(([
            waterpompsData,
            systemsData,
            partsData,
            machinesData,
            pipesData,
            toolsData,
        ]) => {
            setFavorits([
                ...waterpompsData,
                ...systemsData,
                ...partsData,
                ...machinesData,
                ...pipesData,
                ...toolsData,]
            );
        })
    }, [pathname]);

 

    return (
        <section className="product-page" >
           
            
            {favorits &&favorits.map(x=>
            <FavoritProducts key={x._id} {...x}/>
            )}
            {favorits.length===0 &&(
                <h1 className="no-product">There are no Favorits yet!</h1>
            )}
          
        </section>
    )
}