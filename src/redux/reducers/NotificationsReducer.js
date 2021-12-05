import Actions from '../actions';
import {reducerDefault} from '../common/reducers';

export const notifications = (...props) => {
  return reducerDefault(...props, Actions.GET_NOTIFICATIONS);
};

export const notificationsOrder = (...props) => {
  return reducerDefault(...props, Actions.GET_NOTIF_ORDER);
};

export const NotificationsReducer = {
  notifications,
  notificationsOrder,
};
