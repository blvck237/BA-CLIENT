import { combineReducers } from 'redux';
import products from './productReducer';
import account from './accountReducer';

export default combineReducers({
  account,
  products,
});
