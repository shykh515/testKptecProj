import axios, { AxiosError, AxiosResponse } from "axios";
import { logout } from "../redux/actions/Auth.action";
import { store } from '../redux/store';
import { _setDataToAsyncStorage, getTokenAndSetIntoHeaders } from "./asyncStorage/Functions";
import { TOKEN } from "./asyncStorage/Constants";

export const isUat: boolean = false;

let baseUrl: string = '';

const interceptor = () => {
    axios.defaults.baseURL = baseUrl;

    axios.interceptors.request.use(
        function (config) {
            return config;
        },
        function (error: AxiosError) {
            console.log('error', error);
            return Promise.reject(error.response);
        }
    );

    axios.interceptors.response.use(
        function (response: AxiosResponse) {
            (async () => {
                if (response?.headers?.token) {
                    await _setDataToAsyncStorage(TOKEN, response?.headers?.token);
                    await getTokenAndSetIntoHeaders(response?.headers?.token);
                }
            })();

            if (response?.data?.error && response?.data?.data?.message === 'Session expired.') {
                // store.dispatch(logout(true,  response?.data?.data?.message))
            }
            return response;
        },
        function (error: AxiosError) {
            console.log('error', error);
            console.log('error message', error.response);
            
            if (error?.response?.status === 401) {
                // store.dispatch(logout(true, 'expire', error?.response?.data?.Message))
            }
            return Promise.reject(error.response);
        }
    );
};

export {
    baseUrl,
    interceptor
}
