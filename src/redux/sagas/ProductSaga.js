import API from '@utils/api';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';

function* getProduct(actions) {
  try {
    const res = yield API.get('product/getAllProducts', actions.params);

    yield put({
      type: _onSuccess(Actions.GET_PRODUCT),
      data: res.data,
      totalPage: res.total_Page,
      isLoadMore: actions.isLoadMore,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.GET_PRODUCT)});
  }
}

function* getProductSale(actions) {
  try {
    const res = yield API.get('product/getAllProducts', actions.params);

    yield put({
      type: _onSuccess(Actions.GET_PRODUCT_SALE),
      data: res.data,
      totalPage: res.total_Page,
      isLoadMore: actions.isLoadMore,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.GET_PRODUCT_SALE)});
  }
}

export function* watchProductSagas() {
  yield takeLatest(Actions.GET_PRODUCT, getProduct);
  yield takeLatest(Actions.GET_PRODUCT_SALE, getProductSale);
}
