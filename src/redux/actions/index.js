export default {
  GET_TOKEN: 'GET_TOKEN',
  GET_CONFIG: 'GET_CONFIG',
  GET_BANNER: 'GET_BANNER',
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
