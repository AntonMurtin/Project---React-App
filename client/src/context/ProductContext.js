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

    const productsServise = productsServiceFactory()

    useEffect(() => {
        Promise.all([
            productsServise.getAll('waterpomps'),
            productsServise.getAll('systems'),
            productsServise.getAll('parts'),
            productsServise.getAll('machines'),
            productsServise.getAll('pipes'),
            productsServise.getAll('tools'),

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
        machines:setMachines,
        pipes:setPipes,
        tools:setTools
    }


    const onCreateProduct = async (data) => {
        const type = data.type;
        try {

            const newProduct = await productsServise.create(type, data);

            setValue[type](state => [...state, newProduct]);
            navigate(`shop/${type}`)
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