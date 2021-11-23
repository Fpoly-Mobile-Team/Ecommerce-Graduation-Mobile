import Actions from '../actions';
import {reducerDefault} from '../common/reducers';

export const addreport = (...props) => {
  return reducerDefault(...props, Actions.ADD_REPORT_SHOP);
};

export const ReportShopReducer = {
  addreport,
};
