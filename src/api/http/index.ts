import Axios from 'axios';
import config from 'config';
import { StorageKeys } from 'types.d';

const Http = Axios.create({
    baseURL: config.api_url,
    timeout: 20000,
    headers: {
      Accept: 'application/json',
    },
})

Http.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(StorageKeys.ACCESS_TOKEN);

  config.headers = {
    ...config.headers,
    'Accept': 'application/json',
  };

  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${JSON.parse(accessToken)}`;
  }

  return config;
});

export default Http;
