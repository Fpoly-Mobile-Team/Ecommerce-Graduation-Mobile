import Actions from '../actions';
import {reducerDefault} from '../common/reducers';

export const notifications = (...props) => {
  return reducerDefault(...props, Actions.GET_NOTIFICATIONS);
};

export const SystemNotification = {
  notifications,
};
