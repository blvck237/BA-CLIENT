import { request, protectedRequest } from '../../api';
import { REQUEST_LOGIN, REQUEST_LOGOUT } from './actionTypes';

export const requestLogin = data => dispatch => {
  return request({ url: '/user/login', method: 'POST', data })
    .then(response => {
      if (response.status === 200) {
        return Promise.resolve(
          dispatch({ type: REQUEST_LOGIN, payload: response.data })
        );
      }
      return Promise.reject(new Error('Failed to login'));
    })
    .catch(e => Promise.reject(new Error(e)));
};

export const requestLogout = () => dispatch => {
  return protectedRequest({ url: '/user/logoutall', method: 'POST' })
    .then(response => {
      if (response.status === 200) {
        return Promise.resolve(
          dispatch({ type: REQUEST_LOGOUT, payload: null })
        );
      }
      return Promise.reject(new Error('Failed to logout'));
    })
    .catch(e => Promise.reject(new Error(e)));
};
