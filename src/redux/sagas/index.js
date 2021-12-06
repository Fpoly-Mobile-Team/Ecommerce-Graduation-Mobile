import {all, fork} from 'redux-saga/effects';
import {watchTokenSagas} from './TokenSaga';
import {watchConfigSagas} from './ConfigSaga';
import {watchBannerSagas} from './BannerSaga';
import {watchTermOfUseSagas} from './TermOfUseSaga';
import {watchUserSagas} from './UserSaga';
import {watchIntroduceSagas} from './IntroduceSaga';
import {watchCategorySagas} from './CategorySaga';
import {watchAddressSagas} from './AddressSaga';
import {watchProductSagas} from './ProductSaga';
import {watchShopSagas} from './ShopSaga';
import {watchReportShopSagas} from './ReportShopSaga';
import {watchShopVoucherSagas} from './ShopVoucherSaga';
import {watchNotificationSagas} from './NotificationSaga';
import {watchSalesmanSagas} from './SalesmanSaga';
import {watchOrderSagas} from './OrderSaga';

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
    fork(watchProductSagas),
    fork(watchShopSagas),
    fork(watchReportShopSagas),
    fork(watchShopVoucherSagas),
    fork(watchNotificationSagas),
    fork(watchSalesmanSagas),
    fork(watchOrderSagas),
  ]);
}
