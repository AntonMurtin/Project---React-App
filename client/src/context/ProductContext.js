import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'


import { productsServiceFactory } from '../services/productsService';

const ProductContext = createContext()

export const ProductProvider = ({
    children
}) => {

    const navigate = useNavigate()
    const [parts, setParts] = useState([]);
    const [tools, setTools] = useState([]);
    const [waterpomps, setWaterpomps] = useState([]);
    
    const productsServise=productsServiceFactory()

    useEffect(() => {
        Promise.all([
            productsServise.getAll('parts'),
            productsServise.getAll('tools'),
            productsServise.getAll('waterpomps'),

        ]).then(([partsData,toolsData,waterpompsData]) => {
                setParts(partsData);
                setTools(toolsData);
                setWaterpomps(waterpompsData);
            })
    }, []);



    const onCreateProduct = async (data) => {
        const type=data.type;
        try {
            
            // const newProduct = await productsServise.create(type,data);
           
    
            // setParts(state => [...state, newProduct]);
            navigate(`shop/${type}`)
        } catch (error) {
            console.log(error.message);
        }
    }


    const contextValues = {
        parts,
        tools,
        waterpomps,
        onCreateProduct,

    }
    return (
        <ProductContext.Provider value={contextValues}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = () => {
    const context = useContext(ProductContext);

    return context;
}