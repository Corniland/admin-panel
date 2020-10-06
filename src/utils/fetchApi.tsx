import { fetchUtils } from 'react-admin';

const apiUrl = `${process.env.REACT_APP_SERVER_ENDPOINT}${process.env.REACT_APP_API_ROUTE}`;

export default {
    get: async (path: string, options?: fetchUtils.Options) => {
        const url = `${apiUrl}${path}`;

        return await fetchUtils.fetchJson(
            url,
            {
                ...options,
                method: 'GET',
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
            }
        );
    }
}
