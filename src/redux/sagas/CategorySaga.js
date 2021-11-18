import API from '@utils/api';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';

// getBanner
function* getCategoryAll() {
  try {
    const res = yield API.get('getCategories');

    yield put({type: _onSuccess(Actions.GET_CATEGORY_ALL), data: res.data});
  } catch (error) {
    yield put({type: _onFail(Actions.GET_CATEGORY_ALL)});
  }
}
function* getCategoryHome(actions) {
  try {
    const res = yield API.get('getCategories', actions.params);

    yield put({type: _onSuccess(Actions.GET_CATEGORY_HOME), data: res.data});
  } catch (error) {
    yield put({type: _onFail(Actions.GET_CATEGORY_HOME)});
  }
}
function* getCategorySub(actions) {
  try {
    const res = yield API.get('getCategories/getCategorySub', actions.params);

    yield put({type: _onSuccess(Actions.GET_CATEGORY_SUB), data: res.data});
  } catch (error) {
    yield put({type: _onFail(Actions.GET_CATEGORY_SUB)});
  }
}

export function* watchCategorySagas() {
  yield takeLatest(Actions.GET_CATEGORY_ALL, getCategoryAll);
  yield takeLatest(Actions.GET_CATEGORY_SUB, getCategorySub);
  yield takeLatest(Actions.GET_CATEGORY_HOME, getCategoryHome);
}
