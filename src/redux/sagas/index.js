import {all, fork} from 'redux-saga/effects';
import {watchTokenSagas} from './TokenSaga';
import {watchConfigSagas} from './ConfigSaga';
import {watchBannerSagas} from './BannerSaga';

export default function* rootSaga() {
  yield all([
    fork(watchTokenSagas),
    fork(watchConfigSagas),
    fork(watchBannerSagas),
  ]);
}
