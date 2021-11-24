import API from '@utils/api';
import {Toast} from '@utils/helper';
import queryString from 'query-string';
import {put, select, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';

function* getProvince() {
  try {
    const res = yield API.get('getLocation');

    yield put({type: _onSuccess(Actions.GET_PROVINCE), data: res.data});
  } catch (error) {
    yield put({type: _onFail(Actions.GET_PROVINCE)});
  }
}

function* getDistrict(actions) {
  try {
    const res = yield API.get('getLocation/getDistrict', actions.params);

    yield put({type: _onSuccess(Actions.GET_DISTRICT), data: res.data});
  } catch (error) {
    yield put({type: _onFail(Actions.GET_DISTRICT)});
  }
}

function* getWard(actions) {
  try {
    const res = yield API.get('getLocation/getWard', actions.params);

    yield put({type: _onSuccess(Actions.GET_WARD), data: res.data});
  } catch (error) {
    yield put({type: _onFail(Actions.GET_WARD)});
  }
}

function* addAddress(actions) {
  const body = queryString.stringify(actions.body);

  try {
    const res = yield API.post(`getUser/addAddress?id=${actions.user}`, body);
    const user = yield select(state => state.tokenUser?.data);
    yield put({type: _onSuccess(Actions.ADD_ADDRESS), data: res.data});
    yield put({
      type: Actions.GET_USER_INFORMATION,
      params: {
        user,
      },
    });
    Toast(res.message);
  } catch (error) {
    yield put({type: _onFail(Actions.ADD_ADDRESS)});
  }
}

function* addAddressDefault(actions) {
  const body = queryString.stringify(actions.body);

  try {
    const user = yield select(state => state.tokenUser?.data);
    const res = yield API.post(`getUser/addDefaultAddress?user=${user}`, body);

    yield put({type: _onSuccess(Actions.ADD_ADDRESS_DEFAULT), data: res.data});
    yield put({
      type: Actions.GET_USER_INFORMATION,
      params: {
        user,
      },
    });
    Toast(res.message);
  } catch (error) {
    yield put({type: _onFail(Actions.ADD_ADDRESS_DEFAULT)});
  }
}

export function* watchAddressSagas() {
  yield takeLatest(Actions.GET_PROVINCE, getProvince);
  yield takeLatest(Actions.GET_DISTRICT, getDistrict);
  yield takeLatest(Actions.GET_WARD, getWard);
  yield takeLatest(Actions.ADD_ADDRESS, addAddress);
  yield takeLatest(Actions.ADD_ADDRESS_DEFAULT, addAddressDefault);
}
