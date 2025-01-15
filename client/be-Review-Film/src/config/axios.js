import axios from "axios";

export const apiClient = axios.create({
    baseURL: "https://netflix-clone-production-fa7c.up.railway.app/api/v1",
});