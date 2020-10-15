import { fetchUtils } from 'react-admin';

const apiUrl = `${process.env.REACT_APP_SERVER_ENDPOINT}${process.env.REACT_APP_API_ROUTE}`;

export default {
    get: async (path: string, options?: fetchUtils.Options) => {
        const url = `${apiUrl}${path}`;

        const auth = localStorage.getItem('auth') || '';
        const { jwt } = JSON.parse(auth);

        const headers = new Headers({
            Accept: 'application/json',
            Authorization: jwt,
        });

        return await fetchUtils.fetchJson(
            url,
            {
                ...options,
                method: 'GET',
                headers,
            }
        );
    },

    post: async (path: string, options?: fetchUtils.Options) => {
        const url = `${apiUrl}${path}`;

        const auth = localStorage.getItem('auth') || '';
        const { jwt } = JSON.parse(auth);

        const headers = new Headers({
            Accept: 'application/json',
            Authorization: jwt,
        });

        return await fetchUtils.fetchJson(
            url,
            {
                ...options,
                method: 'POST',
                headers,
            }
        );
    },

    put: async (path: string, options?: fetchUtils.Options) => {
        const url = `${apiUrl}${path}`;

        const auth = localStorage.getItem('auth') || '';
        const { jwt } = JSON.parse(auth);

        const headers = new Headers({
            Accept: 'application/json',
            Authorization: jwt,
        });

        return await fetchUtils.fetchJson(
            url,
            {
                ...options,
                method: 'PUT',
                headers,
            }
        );
    },

    delete: async (path: string, options?: fetchUtils.Options) => {
        const url = `${apiUrl}${path}`;

        const auth = localStorage.getItem('auth') || '';
        const { jwt } = JSON.parse(auth);

        const headers = new Headers({
            Accept: 'application/json',
            Authorization: jwt,
        });

        return await fetchUtils.fetchJson(
            url,
            {
                ...options,
                method: 'DELETE',
                headers,
            }
        );
    }
}
