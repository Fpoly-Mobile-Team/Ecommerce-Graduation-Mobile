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
import {SystemNotification} from './SystemNotification';
import {Salesman} from './Salesman';
import {OrderReducer} from './OrderReducer';

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
  ...SystemNotification,
  ...Salesman,
  ...OrderReducer,
});

export default rootReducer;
