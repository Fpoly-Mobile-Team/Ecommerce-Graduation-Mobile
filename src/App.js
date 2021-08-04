import {NetWork} from '@components';
import Actions from '@redux/actions';
import store from '@redux/store';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider, useDispatch, useSelector} from 'react-redux';
import RootStack from './navigation/RootStack';

const App = () => {
  const config = useSelector(state => state.config.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: Actions.GET_CONFIG});
  }, [dispatch]);

  useEffect(() => {
    if (config) {
      SplashScreen.hide();
    }
  }, [config]);

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
