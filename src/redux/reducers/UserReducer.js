import {stateDefault} from '@redux/common/initialStates';
import Storage from '@utils/storage';
import Actions, {_onUnmount} from '../actions';
import {reducerDefault} from '../common/reducers';

export const login = (...props) => {
  return reducerDefault(...props, Actions.LOGIN_ACCOUNT);
};

export const tokenUser = (state = stateDefault, action) => {
  switch (action.type) {
    case Actions.TOKEN_USER: {
      Storage.setItem('TOKEN_USER', action.data);
      return {...state, data: action.data};
    }
    case _onUnmount(Actions.TOKEN_USER): {
      return {...stateDefault};
    }
    default:
      return state;
  }
};
export const UserReducer = {login, tokenUser};
