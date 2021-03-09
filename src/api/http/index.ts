import Http from 'axios';
import config from 'config';
import { StorageKeys } from 'types.d';

Http.defaults.baseURL = config.api_url;

Http.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${localStorage.getItem(StorageKeys.ACCESS_TOKEN)}`,
    Accept: 'application/json',
  };

  return config;
});

export default Http;
