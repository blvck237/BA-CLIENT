import { REQUEST_PRODUCTS } from '../actions/actionTypes';

const initialState = {
};

const products = (state = initialState, action) => {
  console.log('Log: products -> action', action);
  switch (action.type) {
    case 'persist/REHYDRATE':
      if (action && action.payload && action.payload.i18n) {
        return {
          ...action.payload.i18n,
          productssss: {},
        };
      }
      return initialState;

    case REQUEST_PRODUCTS:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export default products;
