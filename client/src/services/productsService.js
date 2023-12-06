import { requestFactory } from "./requester";

const url = 'http://localhost:3030';

export const productsServiceFactory = (token) => {
    const request = requestFactory(token);

    const create = async (type,productData) => {

        const result = await request.post(`${url}/${type}/create`, productData);
        console.log(result);

        return result;
    }

    const getAll = async (type) => {
        const result = await request.get(`${url}/${type}/`);
        console.log(result);
        const products = Object.values(result);

        return products;
    }

    return {
        create,
        getAll,
    };
}