import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';
import API from '@utils/api';

// getBanner
function* getBanner() {
  try {
    const res = yield API.get('getBanner');
    yield put({type: _onSuccess(Actions.GET_BANNER), data: res.data});
  } catch (error) {
    yield put({type: _onFail(Actions.GET_BANNER)});
  }
}
export function* watchBannerSagas() {
  yield takeLatest(Actions.GET_BANNER, getBanner);
}
