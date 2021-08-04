import {combineReducers} from 'redux';
import {ConfigReducer} from './ConfigReducer';

const rootReducer = combineReducers({
  ...ConfigReducer,
});

export default rootReducer;
