import {all, fork} from 'redux-saga/effects';
import {watchConfigSagas} from './ConfigSaga';
import {watchBannerSagas} from './BannerSaga';

export default function* rootSaga() {
  yield all([fork(watchConfigSagas), fork(watchBannerSagas)]);
}
