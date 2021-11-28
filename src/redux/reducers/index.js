import {combineReducers} from 'redux';
import {TokenReducer} from './TokenReducer';
import {ConfigReducer} from './ConfigReducer';
import {BannerReducer} from './BannerReducer';
import {TermsOfUseReducer} from './TermsOfUseReducer';
import {DeviceReducer} from './DeviceReducer';
import {UserReducer} from './UserReducer';
import {IntroduceReducer} from './IntroduceReducer';
import {CategoryReducer} from './CategoryReducer';
import {AddressReducer} from './AddressReducer';
import {ProductReducer} from './ProductReducer';
import {ShopReducer} from './ShopReducer';
import {ReportShopReducer} from './ReportShopReducer';
import {ShopVoucherReducer} from './ShopVoucherReducer';

const rootReducer = combineReducers({
  ...TokenReducer,
  ...ConfigReducer,
  ...BannerReducer,
  ...TermsOfUseReducer,
  ...DeviceReducer,
  ...UserReducer,
  ...IntroduceReducer,
  ...CategoryReducer,
  ...AddressReducer,
  ...ProductReducer,
  ...ShopReducer,
  ...ReportShopReducer,
  ...ShopVoucherReducer,
});

export default rootReducer;
