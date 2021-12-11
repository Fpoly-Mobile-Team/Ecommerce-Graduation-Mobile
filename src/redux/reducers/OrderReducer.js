import Actions from '../actions';
import {reducerDefault} from '../common/reducers';

export const createOrder = (...props) => {
  return reducerDefault(...props, Actions.CREATE_ORDER);
};
export const historyOrder = (...props) => {
  return reducerDefault(...props, Actions.GET_HISTORY_ORDER);
};

export const deleteVoucher = (...props) => {
  return reducerDefault(...props, Actions.DELETE_MY_VOUCHER);
};

export const historyOrderCancel = (...props) => {
  return reducerDefault(...props, Actions.GET_HISTORY_ORDER_CANCEL);
};

export const historyOrderDelivering = (...props) => {
  return reducerDefault(...props, Actions.GET_HISTORY_ORDER_DELIVERING);
};

export const historyOrderWaiting = (...props) => {
  return reducerDefault(...props, Actions.GET_HISTORY_ORDER_WAITING);
};

export const cancelOrder = (...props) => {
  return reducerDefault(...props, Actions.CANCEL_ORDER);
};

export const OrderReducer = {
  createOrder,
  deleteVoucher,
  historyOrder,
  historyOrderCancel,
  historyOrderDelivering,
  historyOrderWaiting,
  cancelOrder,
};
