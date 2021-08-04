import {all, fork} from 'redux-saga/effects';
import {watchConfigSagas} from './ConfigSaga';

export default function* rootSaga() {
  yield all([fork(watchConfigSagas)]);
}
