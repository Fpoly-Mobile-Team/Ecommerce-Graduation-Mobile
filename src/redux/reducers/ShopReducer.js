import Actions from '../actions';
import {reducerDefault} from '../common/reducers';

export const shop = (...props) => {
  return reducerDefault(...props, Actions.GET_SHOP_USERS);
};

export const infoShop = (...props) => {
  return reducerDefault(...props, Actions.GET_SHOP_USERS_BY_ID);
};

export const averageRating = (...props) => {
  return reducerDefault(...props, Actions.GET_AVERAGE_RATING_PRODUCT);
};

export const ShopReducer = {
  shop,
  infoShop,
  averageRating,
};
