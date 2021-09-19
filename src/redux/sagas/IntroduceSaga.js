import API from '@utils/api';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';

// getIntroduce
function* getIntroduce() {
  try {
    const res = yield API.get('getIntroduce');

    yield put({type: _onSuccess(Actions.INTRODUCE_INFOR), data: res.data});
  } catch (error) {
    yield put({type: _onFail(Actions.INTRODUCE_INFOR)});
  }
}
export function* watchIntroduceSagas() {
  yield takeLatest(Actions.INTRODUCE_INFOR, getIntroduce);
}
