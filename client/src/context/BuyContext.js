import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsServiceFactory } from "../services/productsService";
import { useAuthContext } from "./AuthContext";




export const BuyContext = createContext();

export const BuyProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const productsService = productsServiceFactory();
    const {userId}=useAuthContext();
    
    const [products, setProducts] = useState([]);
    console.log(products);

    useEffect(() => {
        Promise.all([
            productsService.getBuy('waterpomps', userId),
            productsService.getBuy('systems', userId),
            productsService.getBuy('parts', userId),
            productsService.getBuy('machines', userId),
            productsService.getBuy('pipes', userId),
            productsService.getBuy('tools', userId),

        ]).then(([
            waterpompsData,
            systemsData,
            partsData,
            machinesData,
            pipesData,
            toolsData,
        ]) => {
            setProducts([
                ...waterpompsData,
                ...systemsData,
                ...partsData,
                ...machinesData,
                ...pipesData,
                ...toolsData,
            ]);
        })
    }, [userId]);

    const onBuy = async (type, productId, userId) => {
        try {
            const result = await productsService.buy(type, productId, { userId });
            setProducts(state => [...state, result])
            // setProducts(state => state.map(x => x._id === productId ? result : x))
            navigate(`/shop/${type}`)
        } catch (error) {
            alert(error.message);
        }
    };

    const onRemove = async (type, productId, userId) => {

        try {
            await productsService.removeBuy(type, productId, { userId });
            setProducts(state => state.filter(x => x._id !== productId))
            navigate(`/buy`)
        } catch (error) {
            alert(error.message);
        }
    };

    const contextValues = {
        products,
        onBuy,
        onRemove
    };

    return (
        <BuyContext.Provider value={contextValues}>
            {children}
        </BuyContext.Provider>
    );
};

export const useBuyContext = () => {
    const context = useContext(BuyContext);
    return context;
}