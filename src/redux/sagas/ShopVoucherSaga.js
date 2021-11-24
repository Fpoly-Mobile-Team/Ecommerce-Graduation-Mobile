import API from '@utils/api';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';

function* getShopVoucher(actions) {
  try {
    const res = yield API.get('shopVoucher', actions.params);

    yield put({
      type: _onSuccess(Actions.GET_SHOP_VOUCHERS),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.GET_SHOP_VOUCHERS)});
  }
}
export function* watchShopVoucherSagas() {
  yield takeLatest(Actions.GET_SHOP_VOUCHERS, getShopVoucher);
}
