import Actions from '../actions';
import {reducerDefault} from '../common/reducers';

export const category = (...props) => {
  return reducerDefault(...props, Actions.GET_CATEGORY_ALL);
};
export const categorySub = (...props) => {
  return reducerDefault(...props, Actions.GET_CATEGORY_SUB);
};
export const categoryHome = (...props) => {
  return reducerDefault(...props, Actions.GET_CATEGORY_HOME);
};
export const CategoryReducer = {category, categorySub, categoryHome};
