import { requestFactory } from "./requester";

const url = 'http://localhost:3030/tools';

export const toolsServiceFactory = (token) => {
    const request = requestFactory(token);

    const create = async (productData) => {

        const result = await request.post(`${url}/create`, productData);

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