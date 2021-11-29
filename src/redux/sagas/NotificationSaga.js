import API from '@utils/api';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';
import queryString from 'query-string';
import {Toast} from '@utils/helper';

function* getNotifications(actions) {
  try {
    const res = yield API.get(
      'notification/getSystemNotifications',
      actions.params,
    );

    yield put({
      type: _onSuccess(Actions.GET_NOTIFICATIONS),
      data: res.notifications,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.GET_NOTIFICATIONS)});
  }
}

export function* watchNotificationSagas() {
  yield takeLatest(Actions.GET_NOTIFICATIONS, getNotifications);
}
