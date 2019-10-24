import { REQUEST_LOGIN, REQUEST_LOGOUT } from '../actions/actionTypes';

const initialState = {};

const account = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };
    case REQUEST_LOGOUT:
      localStorage.setItem('token', '');
      return {
        ...state,
        account: {},
        isAuth: false,
      };

    default:
      return state;
  }
};

export default account;
