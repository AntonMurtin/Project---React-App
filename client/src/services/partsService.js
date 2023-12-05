import { requestFactory } from "./requester";

const url = 'http://localhost:3030/parts';

export const partsServiceFactory = (token) => {
    const request = requestFactory(token);

    const create = async (productData) => {

        const result = await request.post(`${url}/create`, productData);
        console.log(result);

        return result;
    }

    const getAll = async () => {
        const result = await request.get(`${url}/`);
        console.log(result);
        const products = Object.values(result);

        return products;
    }

    return {
        create,
        getAll,
    }


}