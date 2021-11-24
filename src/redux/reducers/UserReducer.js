import {stateDefault} from '@redux/common/initialStates';
import Storage from '@utils/storage';
import Actions, {_onSuccess, _onUnmount} from '../actions';
import {reducerDefault} from '../common/reducers';

export const login = (...props) => {
  return reducerDefault(...props, Actions.LOGIN_ACCOUNT);
};

export const register = (...props) => {
  return reducerDefault(...props, Actions.SIGNUP_ACCOUNT);
};

export const userInfo = (...props) => {
  return reducerDefault(...props, Actions.GET_USER_INFORMATION);
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

export const logout = (state = stateDefault, action) => {
  switch (action.type) {
    case Actions.LOGOUT_ACCOUNT: {
      return {...state, isLoading: true};
    }
    case _onSuccess(Actions.LOGOUT_ACCOUNT): {
      Storage.removeItem('TOKEN_USER');
      return {...state, isLoading: false};
    }
    case _onUnmount(Actions.LOGOUT_ACCOUNT): {
      return {...stateDefault};
    }
    default:
      return state;
  }
};
export const update_avatar = (...props) => {
  return reducerDefault(...props, Actions.UPDATE_AVATAR);
};
export const update_user = (...props) => {
  return reducerDefault(...props, Actions.UPDATE_USER);
};
export const update_password = (...props) => {
  return reducerDefault(...props, Actions.UPDATE_PASSWORD);
};
export const loginFb = (...props) => {
  return reducerDefault(...props, Actions.LOGIN_FACEBOOK);
};
export const loginGg = (...props) => {
  return reducerDefault(...props, Actions.LOGIN_GOOGLE);
};
export const myReview = (...props) => {
  return reducerDefault(...props, Actions.GET_MY_REVIEW);
};

export const UserReducer = {
  login,
  register,
  tokenUser,
  logout,
  userInfo,
  update_avatar,
  update_user,
  update_password,
  loginFb,
  loginGg,
  myReview,
};
