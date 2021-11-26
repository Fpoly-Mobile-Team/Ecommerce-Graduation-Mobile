import Actions from '../actions';
import {reducerDefault} from '../common/reducers';

export const shopVoucher = (...props) => {
  return reducerDefault(...props, Actions.GET_SHOP_VOUCHERS);
};

export const ShopVoucherReducer = {shopVoucher};
