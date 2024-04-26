import axios from "axios";
export const ApiResopnes = axios.create(
    {
        baseURL:'http://localhost:8080'
    }
)
export const retriveAlltodos= (username) => ApiResopnes.get(`/users/${username}/todos`);
export const deletetodo= (username , id) => ApiResopnes.delete(`/users/${username}/todos/${id}`);