import Actions from '../actions';
import {reducerDefault} from '../common/reducers';

export const token = (...props) => {
  return reducerDefault(...props, Actions.GET_TOKEN);
};

export const TokenReducer = {token};
