import { AuthProvider } from "react-admin";
import jwt_decode from "jwt-decode";

import fetchAuth from "../utils/fetch-auth";

const authProvider: AuthProvider = {
  login: async (params: any) => {
    const data = {
      login: params.username,
      password: params.password,
    };

    const { body } = await fetchAuth.post("/login", {
      body: JSON.stringify(data),
    });

    localStorage.setItem("auth", body);
  },

  logout: async (_params: any) => {
    localStorage.removeItem("auth");
  },

  checkAuth: async (_params: any) => {
    if (!localStorage.getItem("auth")) {
      throw new Error();
    }
  },

  checkError: async (error: any) => {
    const status = error.status;

    if (status === 401) {
      localStorage.removeItem("auth");
      throw new Error();
    }
  },

  getPermissions: async (_params: any) => {},

  getIdentity: async () => {
    try {
      const auth = localStorage.getItem("auth") || "";
      const { jwt } = JSON.parse(auth);
      const decodedJwt = jwt_decode<{ login: string; id: string }>(jwt);
      return { id: decodedJwt.id, avatar: "", fullName: decodedJwt.login };
    } catch (err) {
      console.error(err);
      return { id: "", avatar: "", fullName: "<Error>" };
    }
  },
};

export default authProvider;
