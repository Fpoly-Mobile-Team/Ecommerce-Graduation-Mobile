import Actions from '../actions';
import {reducerDefault} from '../common/reducers';

export const introduce = (...props) => {
  return reducerDefault(...props, Actions.INTRODUCE_INFOR);
};

export const IntroduceReducer = {introduce};
