import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { productsServiceFactory } from "../services/productsService";
import { useAuthContext } from "./AuthContext";
import { useNotification } from "./NotificationContext";




export const FavoritContext = createContext();

export const FavoritProvider = ({
    children,
}) => {

    const dispatch = useNotification()
    // const navigate = useNavigate();
    const productsService = productsServiceFactory();
    const { userId } = useAuthContext();

    const [favorits, setFavorits] = useState([]);

    useEffect(() => {
        if (userId) {
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

    const onWish = async (type, productId, userId) => {
        try {
            const result = await productsService.wish(type, productId, { userId });
            setFavorits(state => [...state, result])
            // navigate(`/shop/${type}`)
            dispatch({
                type: 'SUCCESS',
                message: `You successfully add ${result.title} to Favorites.`,
            })
        } catch (error) {
            dispatch({
                type: 'ERROR',
                message: error.message,
            })
        }
    };

    const onRemove = async (type, productId, userId) => {
        try {
            await productsService.removeWish(type, productId, { userId });
            setFavorits(state => state.filter(x => x._id !== productId))
            // navigate(`/favorit`)
            dispatch({
                type: 'SUCCESS',
                message: `You successfully remove the product.`,
            })
        } catch (error) {
            dispatch({
                type: 'ERROR',
                message: error.message,
            })
        }
    };


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