import Actions from '../actions';
import {reducerAdvance} from '../common/reducers';

export const product = (...props) => {
  return reducerAdvance(...props, Actions.GET_PRODUCT);
};

export const productSale = (...props) => {
  return reducerAdvance(...props, Actions.GET_PRODUCT_SALE);
};

export const ProductReducer = {
  product,
  productSale,
};
