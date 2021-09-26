import {NetWork} from '@components';
import Actions from '@redux/actions';
import store from '@redux/store';
import Storage from '@utils/storage';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {useFCM, useDeviceInfo} from '@hooks';
import RootStack from './navigation/RootStack';

const App = () => {
  const dispatch = useDispatch();
  const fcm = useFCM();
  const device = useDeviceInfo();
  const token = useSelector(state => state.token.data);
  const config = useSelector(state => state.config.data);
  //getTokenDevice from  fcm
  useEffect(() => {
    fcm.requestUserPermission();
    fcm.getDeviceToken().then(device_token => {
      dispatch({
        type: Actions.DEVICE_INFO,
        device_token,
        device_name:
          device.deviceName +
          ' _ ' +
          device.systemName +
          ' _ ' +
          device.systemVersion,
      });
    });
  }, [device, fcm, dispatch]);

  //config
  useEffect(() => {
    dispatch({type: Actions.GET_TOKEN});
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      dispatch({type: Actions.GET_CONFIG});
      Storage.getItem('TOKEN_USER').then(user => {
        if (user) {
          dispatch({type: Actions.TOKEN_USER, data: user});
        }
      });
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (token && config) {
      SplashScreen.hide();
    }
  }, [token, config]);

  return <RootStack />;
};
const AppWrappter = () => {
  return (
    <Provider store={store}>
      <App />
      <NetWork />
    </Provider>
  );
};

export default AppWrappter;
