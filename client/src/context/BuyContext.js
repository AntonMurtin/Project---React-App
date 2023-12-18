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
    const { userId } = useAuthContext();

    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalprice] = useState(0.0);
    const [totalquantities, setTotalquantities] = useState();
    const [qty, setQty] = useState([]);

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


    const onBuy = async (type, productId, userId) => {
        try {
            const result = await productsService.buy(type, productId, { userId });
            setProducts(state => [...state, result])

        } catch (error) {
            alert(error.message);
        }
    };

    const onRemove = async (type, productId, userId) => {
        foundProduct = products.find((item) => item._id === productId);
        setTotalprice(x=>x-(foundProduct.price*foundProduct.quantity))

        try {
            await productsService.removeBuy(type, productId, { userId });
            setProducts(state => state.filter(x => x._id !== productId))
            navigate(`/buy`)
        } catch (error) {
            alert(error.message);
        }
    };
    const incQty = (id, value) => {
        foundProduct = products.find((item) => item._id === id);
       
        
        if (value === 'inc') {
           
            foundProduct.quantity += 1;
            setTotalprice(x=>x+Number(foundProduct.price))
            console.log(foundProduct.quantity);
        } else if (value === 'dec')
            if (foundProduct.quantity - 1 > 0){
                foundProduct.quantity -= 1;
                setTotalprice(x=>x-Number(foundProduct.price))
            }
         
           
       setProducts(state => state.map(x => x._id === id ? foundProduct : x))
    }

    const decQty = () => {
        setQty((state) => {
            if (state - 1 < 1) return 1;

            return state - 1;
        })
    }

    const contextValues = {
        products,
        totalPrice,
        totalquantities,
        qty,
        onBuy,
        onRemove,
        incQty,
        decQty,
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