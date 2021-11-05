import Actions from '../actions';
import {reducerDefault, reducerSearch} from '../common/reducers';

export const province = (...props) => {
  return reducerSearch(...props, Actions.GET_PROVINCE);
};

export const district = (...props) => {
  return reducerSearch(...props, Actions.GET_DISTRICT);
};

export const ward = (...props) => {
  return reducerSearch(...props, Actions.GET_WARD);
};

export const addAddress = (...props) => {
  return reducerDefault(...props, Actions.ADD_ADDRESS);
};

export const addAddressDefault = (...props) => {
  return reducerDefault(...props, Actions.ADD_ADDRESS_DEFAULT);
};

export const AddressReducer = {
  province,
  district,
  ward,
  addAddress,
  addAddressDefault,
};
