import API from '@utils/api';
import queryString from 'query-string';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';

function* getShop(actions) {
  const body = queryString.stringify(actions.body);

  try {
    const res = yield API.post('shopUser/getShopUsersById', body);

    yield put({type: _onSuccess(Actions.GET_SHOP_USERS_BY_ID), data: res.data});
  } catch (error) {
    yield put({type: _onFail(Actions.GET_SHOP_USERS_BY_ID)});
  }
}

export function* watchShopSagas() {
  yield takeLatest(Actions.GET_SHOP_USERS_BY_ID, getShop);
}
