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

    const getBiId = async (type, id) => {
        const product = await request.get(`${url}/${type}/${id}`)

        return product;
    };

    const edit = async (type, id, data) => {
        const result = await request.put(`${url}/${type}/${id}/edit`, data)

        return result;
    };

    const del = (type, id) => request.delete(`${url}/${type}/${id}/delete`);




    const search = async (type, data) => {
        const result = await request.put(`${url}/${type}/search`, data);
        const products = Object.values(result);

        return products;
    }



    
    const wish = (type, id, userId) => request.put(`${url}/${type}/${id}/wish`, userId)
    
    const getWish = async (type, userId) => {
        const result = await request.get(`${url}/${type}/${userId}/wish`);
        const products = Object.values(result);
        
        return products;
    };

    const removeWish = (type, id, userId) => request.put(`${url}/${type}/${id}/removeWish`, userId)
    


    

    const buy = (type, id, data) => request.put(`${url}/${type}/${id}/buyProduct`, data)

    const getBuy=async (type, userId) => {
        const result = await request.get(`${url}/${type}/${userId}/buyProduct`);
        const products = Object.values(result);

        return products;
    };

    const removeBuy = (type, id, userId) => request.put(`${url}/${type}/${id}/removeBuy`, userId);


    return {
        create,
        getAll,
        getBiId,
        edit,
        del,
        wish,
        getWish,
        removeWish,
        search,
        buy,
        getBuy,
        removeBuy,
    };
}