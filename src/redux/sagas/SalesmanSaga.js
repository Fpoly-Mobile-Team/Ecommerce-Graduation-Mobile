import API from '@utils/api';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';
import queryString from 'query-string';
import {Toast} from '@utils/helper';
import {routes} from '@navigation/routes';
import {Alert} from 'react-native';
import {navigate} from '@navigation/RootNavigation';

function* createSalesRequisition(actions) {
  const body = queryString.stringify(actions.body);
  try {
    const res = yield API.post(`shopRegister/makeRegisterRequest`, body);
    yield put({
      type: _onSuccess(Actions.SELLER_SEND_INQUIRY),
      data: res.data,
    });
    if (res.success) {
      Alert.alert(
        'Đăng ký thành công',
        'Quản trị sẽ liên hệ với bạn sau 24h.',
        [
          {
            text: 'Về trang chủ',
            onPress: () => navigate(routes.BOTTOMTABBAR),
          },
        ],
      );
    } else {
      Toast(res.message);
    }
  } catch (error) {
    yield put({type: _onFail(Actions.SELLER_SEND_INQUIRY)});
  }
}

export function* watchSalesmanSagas() {
  yield takeLatest(Actions.SELLER_SEND_INQUIRY, createSalesRequisition);
}
