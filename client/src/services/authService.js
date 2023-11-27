import { requestFactory } from "./requester";

const url = '/users';

export const authServiceFactoty = () => {
    const request = requestFactory()
    return {
        login: (data) => request.post(`${url}/login`, data),
        register: (data) => request.post(`${url}/register`, data),
        logout: () => request.get(`${url}/logout`),
    }
};