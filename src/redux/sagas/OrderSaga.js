import {navigate} from '@navigation/RootNavigation';
import {routes} from '@navigation/routes';
import API from '@utils/api';
import {Toast} from '@utils/helper';
import queryString from 'query-string';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';

function* createOrder(actions) {
  const body = queryString.stringify(actions.body);

  try {
    const res = yield API.post('order/createOrder', body);
    yield put({type: _onSuccess(Actions.CREATE_ORDER), data: res.data});
    if (res.success) {
      navigate(routes.PURCHASE_SCREEN, {price: actions.price});
    }
    Toast(res.message);
  } catch (error) {
    yield put({type: _onFail(Actions.CREATE_ORDER)});
  }
}

function* deleteVoucher(actions) {
  const body = queryString.stringify(actions.body);

  try {
    const res = yield API.post('getUser/deleteMyVouchers', body);
    yield put({type: _onSuccess(Actions.DELETE_MY_VOUCHER), data: res.data});
  } catch (error) {
    yield put({type: _onFail(Actions.DELETE_MY_VOUCHER)});
  }
}

export function* watchOrderSagas() {
  yield takeLatest(Actions.CREATE_ORDER, createOrder);
  yield takeLatest(Actions.DELETE_MY_VOUCHER, deleteVoucher);
}
