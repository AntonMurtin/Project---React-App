import { requestFactory } from "./requester";

const url = 'http://localhost:3030/products';

export const productsServiceFactory = (token) => {
    const request = requestFactory(token);

    const create = async (type, productData) => {

        const result = await request.post(`${url}/${type}/create`, productData);

        return result;
    };

    const getAll = async (type) => {
        const result = await request.get(`${url}/${type}/`);
        const products = Object.values(result);

        return products;
    };

    const getBiId=async(type,id)=>{
        const product=await request.get(`${url}/${type}/${id}`)

        return product;
    };

    const edit=async(type,id,data)=>{
       const result=await request.put(`${url}/${type}/${id}/edit`,data)
    
        return result;
    };

    const del =(type,id)=>request.delete(`${url}/${type}/${id}/delete`);

    return {
        create,
        getAll,
        getBiId,
        edit,
        del,
    };
}