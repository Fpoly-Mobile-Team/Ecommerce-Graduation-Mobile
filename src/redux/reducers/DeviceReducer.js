import actions from '@redux/actions';
import {reducerDevice} from '@redux/common/reducers';

export const device = (...props) => {
  return reducerDevice(...props, actions.DEVICE_INFO);
};

export const DeviceReducer = {device};
