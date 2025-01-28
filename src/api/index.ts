import axios from "axios";

const baseUrl = import.meta.env.VITE_ENPOINT_URL


// const instance = axios.create({
//     baseURL: baseUrl,
//     timeout: 1000,
// });

export const get = async (path: string, attrs: object = {}) => await axios.get(`${baseUrl}/${path}`, attrs)
export const post = async (path: string, attrs: object = {}) => await axios.post(`${baseUrl}/${path}`, attrs)