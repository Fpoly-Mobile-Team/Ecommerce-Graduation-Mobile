import Actions from '../actions';
import {reducerDefault} from '../common/reducers';

export const createOrder = (...props) => {
  return reducerDefault(...props, Actions.CREATE_ORDER);
};

export const deleteVoucher = (...props) => {
  return reducerDefault(...props, Actions.DELETE_MY_VOUCHER);
};

export const OrderReducer = {
  createOrder,
  deleteVoucher,
};
