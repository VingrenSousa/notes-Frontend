import axios from "axios";

export const api = axios.create({
    baseURL:"http://localhost:3000"
})

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            localStorage.removeItem("@note:token");
            localStorage.removeItem("@note:user");

            window.location.href = "/";
        }

        return Promise.reject(error);
    }
);