import { REQUEST_PRODUCTS } from '../actions/actionTypes';

const initialState = {};

const products = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default products;
