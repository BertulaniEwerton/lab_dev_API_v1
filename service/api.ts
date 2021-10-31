/* eslint-disable no-console */
import axios, { AxiosError } from 'axios';
import { environment } from 'environments/environment.dev';

const api = axios.create({ baseURL: environment.apiBaseUrl });

/**
 * Request interceptor
 */

api.interceptors.request.use(
  (config) => {
    const token = 'token';

    const headers = { ...config.headers };
    if (token) headers.Authorization = `Bearer ${token}`;

    // eslint-disable-next-line no-param-reassign
    config.validateStatus = (status) => {
      if (status === 401) {
        // logout
      }

      return true;
    };
    return { ...config, headers };
  },

  // request - error
  async (error: AxiosError) => {
    const { message } = error;

    if (message === 'Network Error') {
      console.log('Network Error');
    }
    return Promise.reject(error);
  },
);

/**
 * Response interceptor
 */

api.interceptors.response.use(
  // status code - success
  (res) => res,

  // response - error
  async (error: AxiosError) => {
    const { message } = error;

    if (message === 'Network Error') {
      console.log('Network Error');
    }
    return Promise.reject(error);
  },
);

export default api;
