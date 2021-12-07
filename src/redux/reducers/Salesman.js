import Actions from '../actions';
import {reducerDefault} from '../common/reducers';

export const salesInquiry = (...props) => {
  return reducerDefault(...props, Actions.SELLER_SEND_INQUIRY);
};

export const Salesman = {
  salesInquiry,
};
