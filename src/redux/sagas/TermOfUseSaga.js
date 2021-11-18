import API from '@utils/api';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';

// getRule
function* getTermOfUse() {
  try {
    const res = yield API.get('getRule');

    yield put({type: _onSuccess(Actions.GET_TERMS_OF_USE), data: res.data});
  } catch (error) {
    yield put({type: _onFail(Actions.GET_TERMS_OF_USE)});
  }
}
export function* watchTermOfUseSagas() {
  yield takeLatest(Actions.GET_TERMS_OF_USE, getTermOfUse);
}
