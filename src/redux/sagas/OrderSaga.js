import {navigate} from '@navigation/RootNavigation';
import {routes} from '@navigation/routes';
import API from '@utils/api';
import {Toast} from '@utils/helper';
import Storage from '@utils/storage';
import queryString from 'query-string';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';

function* createOrder(actions) {
  const body = queryString.stringify(actions.body);

  try {
    const res = yield API.post('order/createOrder', body);
    yield put({type: _onSuccess(Actions.CREATE_ORDER), data: res.data});
    if (res.success) {
      if (actions.body.type === 'CART') {
        Storage.getItem('CART').then(value => {
          for (let index = 0; index < value.length; index++) {
            let elementa = value[index];
            if (elementa._id === actions.body.shopId) {
              for (let i = 0; i < actions.body.product.length; i++) {
                let element = actions.body.product[i];
                element = {
                  ...elementa,
                  productArray: elementa.productArray.filter(
                    v =>
                      v.product._id !== actions.body.product[i].productId ||
                      v.color !== actions.body.product[i].color,
                  ),
                };
                let elements = value;
                elements[index] = element;
                Storage.setItem('CART', elements);
              }

              Storage.getItem('CART').then(value => {
                for (let index = 0; index < value.length; index++) {
                  if (value[index]._id === actions.body.shopId) {
                    if (value[index].productArray.length === 0) {
                      Storage.setItem(
                        'CART',
                        value.filter(v => v._id !== actions.body.shopId),
                      );
                    }
                  }
                }
              });
            }
          }
        });
      }

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
