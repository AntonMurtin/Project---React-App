import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import {partsServiceFactory  } from '../services/partsService'
import {toolsServiceFactory  } from '../services/toolsService'

const PartsContext = createContext()

export const PartsProvider = ({
    children
}) => {

    const navigate = useNavigate()
    const [parts, setParts] = useState([]);
    const partsService = partsServiceFactory() ;
    
    const [tools, setTools] = useState([]);
    const toolsService=toolsServiceFactory()

    useEffect(() => {
        partsService.getAll()
            .then(result => {
                setParts(result);
            })
    }, []);
    useEffect(() => {
        toolsService.getAll()
            .then(result => {
                setTools(result);
            })
    }, []);



    const onCreateParts = async (data) => {
        try {
            
            const newProduct = await partsService.create(data);
           
    
            setParts(state => [...state, newProduct]);
            navigate('shop/parts')
        } catch (error) {
            console.log(error.message);
        }
    }

    const onCreateTools = async (data) => {
        try {
            
            const newProduct = await toolsService.create(data);
           
    
            setTools(state => [...state, newProduct]);
            navigate('shop/tools')
        } catch (error) {
            console.log(error.message);
        }
    }



    const contextValues = {
        parts,
        tools,
        onCreateParts,
        onCreateTools

    }
    return (
        <PartsContext.Provider value={contextValues}>
            {children}
        </PartsContext.Provider>
    )
}

export const usePartsContext = () => {
    const context = useContext(PartsContext);

    return context;
}