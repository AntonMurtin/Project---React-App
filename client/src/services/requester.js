const host = process.env.NODE_ENV ==='development'
? 'http://localhost:3030'
: 'http://localhost:3031';

const requester = async (method, url, data) => {
    const options = {
        method,
        headers: {}
    }
    
    const userData =localStorage.getItem('auth');
    if (userData) {
        const auth = JSON.parse(userData);
        if (auth.accessToken) {
            options.headers = {
                ...options.headers,
                'X-Authorization': auth.accessToken,
            };
        }
    }
    if (data !== undefined) {
        options.headers['Content-Type'] = 'aplication/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(host + url, options);
        let result={};
        if (response.status !== 204) {
            result = await response.json()
        }
        if (!response.ok ) {
            
            const error = result;
            throw error
        }
        return result
    } catch (err) {
        alert(err.message);
        throw err
    }
}

export const requestFactory = () => {
    return {
        get: requester.bind(null, 'GET'),
        post: requester.bind(null, 'POST'),
        put: requester.bind(null, 'PUT'),
        patch: requester.bind(null, 'PATCH'),
        delete: requester.bind(null, 'DELETE'),
    }
};