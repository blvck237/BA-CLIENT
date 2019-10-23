import { request } from '../../api';
import { REQUEST_PRODUCTS } from './actionTypes';

export const requestProducts = () => (dispatch, getState) => {
  return request({ url: '/products', method: 'GET' })
    .then(response => {
      if (response.status === 200) {
        return Promise.resolve(
          dispatch({ type: REQUEST_PRODUCTS, payload: response.data.data })
        );
      }
      return Promise.reject(new Error('Failed to get products'));
    })
    .catch(e => Promise.reject(new Error(e)));
};
