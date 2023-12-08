import { requestFactory } from "./requester";

const url = 'http://localhost:3030/products';

export const productsServiceFactory = (token) => {
    const request = requestFactory(token);

    const create = async (type, productData) => {

        const result = await request.post(`${url}/${type}/create`, productData);

        return result;
    }

    const getAll = async (type) => {
        const result = await request.get(`${url}/${type}/`);
        const products = Object.values(result);

        return products;
    }

    const getBiId=async(type,id)=>{
        const result=await request.get(`${url}/${type}/${id}`)
        const product = Object.values(result);

        return result;
    }

    return {
        create,
        getAll,
        getBiId,
    };
}