import axios from 'axios';

const defaultHeaders = {
  'Content-Type': 'application/json',
};

const config = {
  baseURL: "http://localhost:3000",
  timeout: 60000,
  headers: defaultHeaders,
};

const request = axios.create(config);

const protectedRequest = options => {
  return localStorage.getItem('token').then(token => {
    if (token) {
      return request({
        headers: {
          ...defaultHeaders,
          Authorization: `Bearer ${token}`,
        },
        ...options,
      });
    }
    return new Error('NO_TOKEN');
  });
};

export { request, protectedRequest };
