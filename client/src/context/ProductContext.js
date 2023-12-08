import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'


import { productsServiceFactory } from '../services/productsService';

const ProductContext = createContext()

export const ProductProvider = ({
    children
}) => {

    const navigate = useNavigate()

    const [waterpomps, setWaterpomps] = useState([]);
    const [systems, setSystems] = useState([]);
    const [parts, setParts] = useState([]);
    const [machines, setMachines] = useState([]);
    const [pipes, setPipes] = useState([]);
    const [tools, setTools] = useState([]);

    const productsService = productsServiceFactory()

    useEffect(() => {
        Promise.all([
            productsService.getAll('waterpomps'),
            productsService.getAll('systems'),
            productsService.getAll('parts'),
            productsService.getAll('machines'),
            productsService.getAll('pipes'),
            productsService.getAll('tools'),

        ]).then(([
            waterpompsData,
            systemsData,
            partsData,
            machinesData,
            pipesData,
            toolsData,
        ]) => {
            setWaterpomps(waterpompsData);
            setSystems(systemsData);
            setParts(partsData);
            setMachines(machinesData);
            setPipes(pipesData);
            setTools(toolsData);
        })
    }, []);

    const setValue = {
        waterpomps: setWaterpomps,
        systems: setSystems,
        parts: setParts,
        machines: setMachines,
        pipes: setPipes,
        tools: setTools
    }


    const onCreateProduct = async (data) => {
        const type = data.type;
        try {

            const newProduct = await productsService.create(type, data);

            setValue[type](state => [...state, newProduct]);
            navigate(`shop/${type}`)
        } catch (error) {
            console.log(error.message);
        }
    };

    const onEditProduct = async (data) => {
        const type = data.type;
        const id = data._id;
        try {
            const result = await productsService.edit(type, id, data);
            setValue[type](state => state.map(x => x._id === data._id ? result : x))
            navigate(`shop/${type}/${id}/details`)
        } catch (error) {
            console.log(error.message);
        }
    }

    


    const contextValues = {
        waterpomps,
        systems,
        parts,
        machines,
        pipes,
        tools,
        onCreateProduct,
        onEditProduct,
        
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