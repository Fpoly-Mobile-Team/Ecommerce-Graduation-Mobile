import API from '@utils/api';
import queryString from 'query-string';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';
import {Toast} from '@utils/helper';
import {navigate} from '@navigation/RootNavigation';
import {routes} from '@navigation/routes';
import {Alert} from 'react-native';

function* addReportshop(actions) {
  const body = queryString.stringify(actions.body);

  try {
    const res = yield API.post('report/makeReport', body);
    yield put({type: _onSuccess(Actions.ADD_REPORT_SHOP), data: res.data});
    if (res.success) {
      Alert.alert(
        'Tố cáo thành công',
        'Cảm ơn bạn đã đóng góp, yêu cầu của bạn đã được gởi lên hệ thống.',
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
    yield put({type: _onFail(Actions.ADD_REPORT_SHOP)});
  }
}

export function* watchReportShopSagas() {
  yield takeLatest(Actions.ADD_REPORT_SHOP, addReportshop);
}
