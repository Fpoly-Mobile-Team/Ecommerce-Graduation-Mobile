import Actions from '../actions';
import {reducerDefault} from '../common/reducers';

export const termsOfUse = (...props) => {
  return reducerDefault(...props, Actions.GET_TERMS_OF_USE);
};

export const TermsOfUseReducer = {termsOfUse};
