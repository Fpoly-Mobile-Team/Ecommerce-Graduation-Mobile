import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';
import API from '@utils/api';

// getConfig
function* getConfig() {
  try {
    const res = yield API.get('getConfig');

    yield put({type: _onSuccess(Actions.GET_CONFIG), data: res.data});
  } catch (error) {
    yield put({type: _onFail(Actions.GET_CONFIG)});
  }
}
export function* watchConfigSagas() {
  yield takeLatest(Actions.GET_CONFIG, getConfig);
}
