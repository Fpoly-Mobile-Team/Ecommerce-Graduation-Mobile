import API from '@utils/api';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';
import queryString from 'query-string';

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

function* getProductDetails(actions) {
  try {
    const body = queryString.stringify(actions.body);

    const res = yield API.post('product/getProductById', body);

    yield put({
      type: _onSuccess(Actions.GET_PRODUCT_BY_ID),
      data: res.product,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.GET_PRODUCT_BY_ID)});
  }
}

function* getProductDetailsShop(actions) {
  try {
    const res = yield API.get('product', actions.params);

    yield put({
      type: _onSuccess(Actions.GET_PRODUCT_DETAILS_BY_SHOP),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.GET_PRODUCT_DETAILS_BY_SHOP)});
  }
}

function* getProductDetailsByCategory(actions) {
  try {
    const body = queryString.stringify(actions.body);

    const res = yield API.post('product/getProductsByCategory', body);

    yield put({
      type: _onSuccess(Actions.GET_PRODUCT_BY_CATEGORY),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.GET_PRODUCT_BY_CATEGORY)});
  }
}

export function* watchProductSagas() {
  yield takeLatest(Actions.GET_PRODUCT, getProduct);
  yield takeLatest(Actions.GET_PRODUCT_SALE, getProductSale);
  yield takeLatest(Actions.GET_PRODUCT_BY_ID, getProductDetails);
  yield takeLatest(Actions.GET_PRODUCT_DETAILS_BY_SHOP, getProductDetailsShop);
  yield takeLatest(
    Actions.GET_PRODUCT_BY_CATEGORY,
    getProductDetailsByCategory,
  );
}
