import Actions from '../actions';
import {reducerDefault} from '../common/reducers';

export const banner = (...props) => {
  return reducerDefault(...props, Actions.GET_BANNER);
};

export const BannerReducer = {banner};
