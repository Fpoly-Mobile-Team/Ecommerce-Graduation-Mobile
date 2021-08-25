import {combineReducers} from 'redux';
import {ConfigReducer} from './ConfigReducer';
import {BannerReducer} from './BannerReducer';

const rootReducer = combineReducers({
  ...ConfigReducer,
  ...BannerReducer,
});

export default rootReducer;
