import {_onFail, _onSearch, _onSuccess, _onUnmount} from '@redux/actions';
import {
  stateDefault,
  stateDevice,
  stateLoadMore,
  stateSearch,
} from './initialStates';

export const reducerDevice = (state = stateDevice, action, Action) => {
  switch (action.type) {
    case Action: {
      return {
        ...state,
        device_token: action.device_token,
        device_name: action.device_name,
      };
    }
    default:
      return state;
  }
};

export const reducerDefault = (state = stateDefault, action, Action) => {
  switch (action.type) {
    case Action:
      return {...state, isLoading: true};
    case _onSuccess(Action):
      return {data: action.data, isLoading: false};
    case _onFail(Action):
      return {...state, isLoading: false};
    case _onUnmount(Action):
      return {...stateDefault};
    default:
      return state;
  }
};

export const reducerAdvance = (state = stateLoadMore, action, Action) => {
  switch (action.type) {
    case Action:
      return {...state, isLoading: true};
    case _onSuccess(Action): {
      const data = state.data ? [...state.data, ...action.data] : action.data;
      return {
        data: action.isLoadMore ? data : action.data,
        totalPage: action.totalPage,
        isLoading: false,
      };
    }
    case _onFail(Action):
      return {...state, isLoading: false};
    case _onUnmount(Action):
      return {...stateLoadMore};
    default:
      return state;
  }
};

export const reducerSearch = (state = stateSearch, action, actionName) => {
  switch (action.type) {
    case actionName:
      return {...state, isLoading: true};
    case _onFail(actionName):
      return {...state, isLoading: false};
    case _onUnmount(actionName):
      return {...stateLoadMore};
    case _onSuccess(actionName):
      return {
        ...state,
        data: action.data,
        dataTmp: action.data,
        isLoading: false,
      };
    case _onSearch(actionName): {
      const newData = state.dataTmp?.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = action.keyword.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      return {...state, data: newData};
    }
    default:
      return state;
  }
};
