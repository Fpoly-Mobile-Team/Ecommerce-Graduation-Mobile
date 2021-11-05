import Actions from '../actions';
import {reducerDefault} from '../common/reducers';

export const config = (...props) => {
  return reducerDefault(...props, Actions.GET_CONFIG);
};

export const ConfigReducer = {config};
