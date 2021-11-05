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
});

export default rootReducer;
