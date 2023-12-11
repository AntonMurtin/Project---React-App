import { useEffect, useState } from "react"
import { productsServiceFactory } from "../../services/productsService";
import { useAuthContext } from "../../context/AuthContext";
import { useProductContext } from "../../context/ProductContext";
import { FavoritProducts } from "./FavoritProducts/FavoritProducts";




export const Favorit = () => {

    const productsService = productsServiceFactory();
    const { userId } = useAuthContext()
   

    const [favorits, setFavorits] = useState([]);

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
    }, []);

 

    return (
        <section  >
            
            
            {favorits.map(x=>
            <FavoritProducts key={x._id} {...x}/>
            )}
          
        </section>
    )
}