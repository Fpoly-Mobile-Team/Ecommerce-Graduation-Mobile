import {NetWork} from '@components';
import Actions from '@redux/actions';
import store from '@redux/store';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider, useDispatch, useSelector} from 'react-redux';
import RootStack from './navigation/RootStack';

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token.data);
  const config = useSelector(state => state.config.data);

  useEffect(() => {
    dispatch({type: Actions.GET_TOKEN});
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      dispatch({type: Actions.GET_CONFIG});
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
