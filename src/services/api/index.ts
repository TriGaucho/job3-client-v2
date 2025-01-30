import axios from "axios";
import { errorInterceptor, requestInterceptor, responseInterceptor } from "./interceptors";
import { Environment } from "../../environment";

const baseUrl = Environment.BASE_URL

if (!baseUrl) throw new Error('base url não definido')

const api = axios.create({
  baseURL: baseUrl
})

api.interceptors.request.use(
  (config) => requestInterceptor(config),
  (error) => errorInterceptor(error)
);

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);

export default api;