import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsServiceFactory } from "../services/productsService";
import { useAuthContext } from "./AuthContext";




export const FavoritContext = createContext();

export const FavoritProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const productsService = productsServiceFactory();
    const {userId}=useAuthContext();
    
    const [favorits, setFavorits] = useState([]);
   
    useEffect(() => {
        if(userId){
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
    }
    }, [userId]);

    const onWish=async(type,productId,userId)=>{
        try {
            const result = await productsService.wish(type,productId,{userId});
            setFavorits(state => [...state, result])
            // navigate(`/shop/${type}`)
        } catch (error) {
            alert(error.message);
        }
    };

    const onRemove=async(type,productId,userId)=>{
        try {
            await productsService.removeWish(type,productId,{userId});
            setFavorits(state => state.filter(x => x._id !== productId))
            navigate(`/favorit`)
        } catch (error) {
            alert(error.message);
        }
    };

    // const onBuy = async (type, productId, userId) => {
    //     try {
    //         const result = await productsService.buy(type, productId, { userId });
    //         setProducts(state => [...state, result])
    //         // setProducts(state => state.map(x => x._id === productId ? result : x))
    //         navigate(`/shop/${type}`)
    //     } catch (error) {
    //         alert(error.message);
    //     }
    // };

    // const onRemove = async (type, productId, userId) => {

    //     try {
    //         await productsService.removeBuy(type, productId, { userId });
    //         setProducts(state => state.filter(x => x._id !== productId))
    //         navigate(`/buy`)
    //     } catch (error) {
    //         alert(error.message);
    //     }
    // };

    const contextValues = {
        favorits,
        onWish,
        onRemove
    };

    return (
        <FavoritContext.Provider value={contextValues}>
            {children}
        </FavoritContext.Provider>
    );
};

export const useFavoritContext = () => {
    const context = useContext(FavoritContext);
    return context;
}