import API from '@utils/api';
import {put, takeLatest, call} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';
import queryString from 'query-string';
import {Toast} from '@utils/helper';
import {goBack} from '@navigation/RootNavigation';

function* login(actions) {
  try {
    const body = queryString.stringify(actions.body);
    const res = yield API.post('getUser/login', body);
    yield put({type: _onSuccess(Actions.LOGIN_ACCOUNT), data: res.data});
    yield put({type: Actions.TOKEN_USER, data: res.data});
    yield put({
      type: Actions.GET_USER_INFORMATION,
      params: {
        user: res.data,
      },
    });
    Toast(res.message);
  } catch (error) {
    yield put({type: _onFail(Actions.LOGIN_ACCOUNT)});
  }
}

function* register(actions) {
  try {
    const body = queryString.stringify(actions.body);
    const res = yield API.post('getUser/register', body);
    yield put({type: _onSuccess(Actions.SIGNUP_ACCOUNT), data: res.data});
    Toast(res.message);
  } catch (error) {
    yield put({type: _onFail(Actions.SIGNUP_ACCOUNT)});
    Toast(error);
  }
}

function* getUserInfo(actions) {
  try {
    const res = yield API.get('getUser/getUserById', actions.params);

    yield put({type: _onSuccess(Actions.GET_USER_INFORMATION), data: res.data});
  } catch (error) {
    yield put({type: _onFail(Actions.GET_USER_INFORMATION)});
  }
}

function* update_avatar(actions) {
  try {
    const body = queryString.stringify(actions.body);
    const res = yield API.post('getUser/updateAvatar', body);
    yield put({type: _onSuccess(Actions.UPDATE_AVATAR), data: res.data});
    yield put({
      type: Actions.GET_USER_INFORMATION,
      params: {user: actions.user},
    });
    actions.onFinish && call(actions.onFinish);
    Toast('Cập nhật thành công');
  } catch (error) {
    yield put({type: _onFail(Actions.UPDATE_AVATAR)});
  }
}

function* update_user(actions) {
  try {
    const body = queryString.stringify(actions.body);
    const res = yield API.post(`getUser/updateUser?id=${actions.user}`, body);
    yield put({type: _onSuccess(Actions.UPDATE_USER), data: res.data});
    yield put({
      type: Actions.GET_USER_INFORMATION,
      params: {user: actions.user},
    });
    if (res.message === 'Cập Nhật Thành Công') {
      goBack();
    }
    Toast(res.message);
  } catch (error) {
    yield put({type: _onFail(Actions.UPDATE_USER)});
  }
}

function* update_password(actions) {
  try {
    const body = queryString.stringify(actions.body);
    const res = yield API.post(
      `getUser/updateUserPassword?id=${actions.user}`,
      body,
    );
    yield put({type: _onSuccess(Actions.UPDATE_PASSWORD), data: res.data});
    yield put({
      type: Actions.GET_USER_INFORMATION,
      params: {user: actions.user},
    });
    if (res.message === 'Cập Nhật Thành Công') {
      goBack();
    }

    Toast(res.message);
  } catch (error) {
    yield put({type: _onFail(Actions.UPDATE_PASSWORD)});
  }
}

function* loginFb(actions) {
  try {
    const body = queryString.stringify(actions.body);
    const res = yield API.post('getUser/loginFb', body);
    yield put({type: _onSuccess(Actions.LOGIN_FACEBOOK), data: res.data});
    yield put({type: Actions.TOKEN_USER, data: res.data});
    yield put({
      type: Actions.GET_USER_INFORMATION,
      params: {
        user: res.data,
      },
    });
    Toast(res.message);
  } catch (error) {
    yield put({type: _onFail(Actions.LOGIN_FACEBOOK)});
  }
}

function* loginGg(actions) {
  try {
    const body = queryString.stringify(actions.body);
    const res = yield API.post('getUser/loginGg', body);
    yield put({type: _onSuccess(Actions.LOGIN_GOOGLE), data: res.data});
    yield put({type: Actions.TOKEN_USER, data: res.data});
    yield put({
      type: Actions.GET_USER_INFORMATION,
      params: {
        user: res.data,
      },
    });
    Toast(res.message);
  } catch (error) {
    yield put({type: _onFail(Actions.LOGIN_GOOGLE)});
  }
}

function* getMyReview(actions) {
  try {
    const res = yield API.get(
      `getUser/GetFeedBackMyReview?user=${actions.user}`,
    );
    yield put({
      type: _onSuccess(Actions.GET_PRODUCT_REVIEW && Actions.GET_MY_REVIEW),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.GET_MY_REVIEW)});
  }
}

export function* watchUserSagas() {
  yield takeLatest(Actions.LOGIN_ACCOUNT, login);
  yield takeLatest(Actions.SIGNUP_ACCOUNT, register);
  yield takeLatest(Actions.GET_USER_INFORMATION, getUserInfo);
  yield takeLatest(Actions.UPDATE_AVATAR, update_avatar);
  yield takeLatest(Actions.UPDATE_USER, update_user);
  yield takeLatest(Actions.UPDATE_PASSWORD, update_password);
  yield takeLatest(Actions.LOGIN_FACEBOOK, loginFb);
  yield takeLatest(Actions.LOGIN_GOOGLE, loginGg);
  yield takeLatest(Actions.GET_MY_REVIEW, getMyReview);
}
