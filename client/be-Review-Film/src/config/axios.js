import axios from "axios";

export const apiClient = axios.create({
    baseURL: "https://paradaya-movie-production-fa7c.up.railway.app/api/v1",
});