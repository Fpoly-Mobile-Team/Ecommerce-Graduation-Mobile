import API from '@utils/api';
import queryString from 'query-string';
import Config from 'react-native-config';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';

// getToken
function* getToken() {
  try {
    const data = {
      username:'ants',
      password: 'EWA4tWTQAgiVf9AJiYbAxUKsew2lbZqk',
    };
    const body = queryString.stringify(data);
    const res = yield API.post('getToken', body);

    yield put({type: _onSuccess(Actions.GET_TOKEN), data: res.token});
  } catch (error) {
    yield put({type: _onFail(Actions.GET_TOKEN)});
  }
}
export function* watchTokenSagas() {
  yield takeLatest(Actions.GET_TOKEN, getToken);
}
