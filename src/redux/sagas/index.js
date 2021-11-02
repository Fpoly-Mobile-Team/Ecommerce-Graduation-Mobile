import {all, fork} from 'redux-saga/effects';
import {watchTokenSagas} from './TokenSaga';
import {watchConfigSagas} from './ConfigSaga';
import {watchBannerSagas} from './BannerSaga';
import {watchTermOfUseSagas} from './TermOfUseSaga';
import {watchUserSagas} from './UserSaga';
import {watchIntroduceSagas} from './IntroduceSaga';
import {watchCategorySagas} from './CategorySaga';
import {watchAddressSagas} from './AddressSaga';

export default function* rootSaga() {
  yield all([
    fork(watchTokenSagas),
    fork(watchConfigSagas),
    fork(watchBannerSagas),
    fork(watchTermOfUseSagas),
    fork(watchUserSagas),
    fork(watchIntroduceSagas),
    fork(watchCategorySagas),
    fork(watchAddressSagas),
  ]);
}
