import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

import { productsServiceFactory } from "../services/productsService";

import { useAuthContext } from "./AuthContext";
import { useNotification } from "./NotificationContext";


export const BuyContext = createContext();

export const BuyProvider = ({
    children,
}) => {
    const dispatch = useNotification()
   
    // const navigate = useNavigate();
    const productsService = productsServiceFactory();
    const { userId } = useAuthContext();

    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalprice] = useState(0.0);
    const [totalquantities, setTotalquantities] = useState();
   

    let foundProduct;
    useEffect(() => {
        if (userId) {
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
        }
    }, [userId]);

    // useEffect(()=>{
    //     if(products.length>0){
    //         getData(products)
    //     }
    // },[userId])

    // const getData=(products)=>{
    //     products.forEach(element => {
    //         setTotalprice(x=>x+=element.price);
            
    //     });
    // }

    const onBuy = async (type, productId, userId) => {
        try {
            const result = await productsService.buy(type, productId, { userId });
            setProducts(state => [...state, result])
            dispatch({
                type: 'SUCCESS',
                message: `You successfully add ${result.title}.`,
            })
        } catch (error) {
                dispatch({
                    type: 'ERROR',
                    message: error.message,
                })
        }
    };

    const onRemove = async (type, productId, userId) => {
        foundProduct = products.find((item) => item._id === productId);
        setTotalprice(x=>x-(foundProduct.price*foundProduct.quantity))

        try {
            await productsService.removeBuy(type, productId, { userId });
            setProducts(state => state.filter(x => x._id !== productId))
            dispatch({
                type: 'SUCCESS',
                message: `You successfully remove ${foundProduct.title}.`,
            })
        } catch (error) {
            dispatch({
                type: 'ERROR',
                message: error.message,
            })
        }
    };
    const changeQty = (id, value) => {
        foundProduct = products.find((item) => item._id === id);
       
        
        if (value === 'inc') {
           
            foundProduct.quantity += 1;
            setTotalprice(x=>x+foundProduct.price)
           
        } else if (value === 'dec')
            if (foundProduct.quantity - 1 > 0){
                foundProduct.quantity -= 1;
                setTotalprice(x=>x-foundProduct.price)
            }
         
           
       setProducts(state => state.map(x => x._id === id ? foundProduct : x))
    }

    

    const contextValues = {
        products,
        totalPrice,
        totalquantities,
        onBuy,
        onRemove,
        changeQty,
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