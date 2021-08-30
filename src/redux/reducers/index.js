import {combineReducers} from 'redux';
import {TokenReducer} from './TokenReducer';
import {ConfigReducer} from './ConfigReducer';
import {BannerReducer} from './BannerReducer';

const rootReducer = combineReducers({
  ...TokenReducer,
  ...ConfigReducer,
  ...BannerReducer,
});

export default rootReducer;
