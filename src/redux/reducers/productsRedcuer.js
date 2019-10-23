import { REQUEST_PRODUCTS } from '../actions/actionTypes';

const initialState = [];

const productList = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};

export default productList;
