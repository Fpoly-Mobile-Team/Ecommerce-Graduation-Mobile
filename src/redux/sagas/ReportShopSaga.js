import API from '@utils/api';
import queryString from 'query-string';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';
import {Toast} from '@utils/helper';

function* addReportshop(actions) {
  const body = queryString.stringify(actions.body);

  try {
    const res = yield API.post('report/makeReport', body);

    yield put({type: _onSuccess(Actions.ADD_REPORT_SHOP), data: res.data});
    Toast('Thành công');
  } catch (error) {
    Toast('Thất bại');
    yield put({type: _onFail(Actions.ADD_REPORT_SHOP)});
  }
}

export function* watchReportShopSagas() {
  yield takeLatest(Actions.ADD_REPORT_SHOP, addReportshop);
}
