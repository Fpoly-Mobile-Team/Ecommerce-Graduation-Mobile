export default {
  GET_TOKEN: 'GET_TOKEN',
  GET_CONFIG: 'GET_CONFIG',
  GET_BANNER: 'GET_BANNER',
  GET_TERMS_OF_USE: 'GET_TERMS_OF_USE',
  LOGIN_ACCOUNT: 'LOGIN_ACCOUNT',
  SIGNUP_ACCOUNT: 'SIGNUP_ACCOUNT',
  LOGOUT_ACCOUNT: 'LOGOUT_ACCOUNT',
  TOKEN_USER: 'TOKEN_USER',
  DEVICE_INFO: 'DEVICE_INFO',
  INTRODUCE_INFOR: 'INTRODUCE_INFOR',
};

export function _onSuccess(action) {
  return action + '_SUCCESS';
}
export function _onFail(action) {
  return action + '_FAIL';
}
export function _onUnmount(action) {
  return action + '_UNMOUNT';
}
