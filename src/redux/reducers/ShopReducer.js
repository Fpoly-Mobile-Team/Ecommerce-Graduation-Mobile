import Actions from '../actions';
import {reducerDefault} from '../common/reducers';

export const infoShop = (...props) => {
  return reducerDefault(...props, Actions.GET_SHOP_USERS_BY_ID);
};

export const ShopReducer = {
  infoShop,
};
