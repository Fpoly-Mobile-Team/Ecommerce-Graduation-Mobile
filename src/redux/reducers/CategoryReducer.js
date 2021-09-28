import Actions from '../actions';
import {reducerDefault} from '../common/reducers';

export const category = (...props) => {
  return reducerDefault(...props, Actions.GET_CATEGORY_ALL);
};
export const categorySub = (...props) => {
  return reducerDefault(...props, Actions.GET_CATEGORY_SUB);
};
export const CategoryReducer = {category, categorySub};
