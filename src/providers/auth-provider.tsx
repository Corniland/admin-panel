import { AuthProvider } from "react-admin";

import fetchAuth from "../utils/fetch-auth";

const authProvider: AuthProvider = {
    login: async (params: any) => {
        const data = {
            login: params.username,
            password: params.password,
        }

        const { body } = await fetchAuth.post(
            '/login',
            {
                body: JSON.stringify(data),
            }
        );

        localStorage.setItem('auth', body)
    },

    logout: async (params: any) => {
        localStorage.removeItem('auth');
    },

    checkAuth: async (params: any) => {
        if (!localStorage.getItem('auth')) {
            throw new Error();
        }
    },

    checkError: async (error: any) => {
        const status = error.status;

        if (status === 401) {
            localStorage.removeItem('auth');
            throw new Error();
        }
    },

    getPermissions: async (params: any) => { },
};

export default authProvider;