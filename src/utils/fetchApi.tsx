import { fetchUtils } from 'react-admin';

const apiUrl = `${process.env.REACT_APP_SERVER_ENDPOINT}${process.env.REACT_APP_API_ROUTE}`;

const getHeaders = () => {
    const auth = localStorage.getItem('auth') || '';
    const { jwt } = JSON.parse(auth);

    const headers = new Headers({
        Accept: 'application/json',
        Authorization: jwt,
    });

    return headers;
};

export default {
    get: async (path: string, options?: fetchUtils.Options) => {
        const url = `${apiUrl}${path}`;

        return await fetchUtils.fetchJson(
            url,
            {
                ...options,
                method: 'GET',
                headers: getHeaders(),
            }
        );
    },

    post: async (path: string, options?: fetchUtils.Options) => {
        const url = `${apiUrl}${path}`;

        return await fetchUtils.fetchJson(
            url,
            {
                ...options,
                method: 'POST',
                headers: getHeaders(),
            }
        );
    },

    put: async (path: string, options?: fetchUtils.Options) => {
        const url = `${apiUrl}${path}`;

        return await fetchUtils.fetchJson(
            url,
            {
                ...options,
                method: 'PUT',
                headers: getHeaders(),
            }
        );
    },

    delete: async (path: string, options?: fetchUtils.Options) => {
        const url = `${apiUrl}${path}`;

        return await fetchUtils.fetchJson(
            url,
            {
                ...options,
                method: 'DELETE',
                headers: getHeaders(),
            }
        );
    }
}
