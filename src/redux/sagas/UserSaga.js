import API from '@utils/api';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';
import queryString from 'query-string';
import {Toast} from '@utils/helper';

// getBanner
function* login(actions) {
  try {
    const body = queryString.stringify(actions.body);
    const res = yield API.post('getUser/login', body);
    yield put({type: _onSuccess(Actions.LOGIN_ACCOUNT), data: res.data});
    yield put({type: Actions.TOKEN_USER, data: res.data});
    Toast(res.message);
  } catch (error) {
    yield put({type: _onFail(Actions.LOGIN_ACCOUNT)});
  }
}
export function* watchUserSagas() {
  yield takeLatest(Actions.LOGIN_ACCOUNT, login);
}
