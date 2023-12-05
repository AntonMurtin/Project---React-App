import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { waterpomServiceFactory } from '../services/waterpompService'

const WaterpompContext = createContext()

export const WaterpompProvider = ({
    children
}) => {

    const navigate = useNavigate()
    const [waterpomps, setWaterpomps] = useState([]);
    const waterpomService = waterpomServiceFactory();



    useEffect(() => {
        waterpomService.getAll()
            .then(result => {
                setWaterpomps(result);
            })
    }, []);



    const onCreateWaterpom = async (data) => {
       try {
        
           const newProduct = await waterpomService.create(data);
         
           setWaterpomps(state => [...state, newProduct]);
           navigate('shop/waterpom')
       } catch (error) {
        console.log(error.message);
       }
    }



    const contextValues = {
        waterpomps,
        onCreateWaterpom

    }
    return (
        <WaterpompContext.Provider value={contextValues}>
            {children}
        </WaterpompContext.Provider>
    )
}

export const useWaterpompContext = () => {
    const context = useContext(WaterpompContext);

    return context;
}