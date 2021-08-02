import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import RootStack from './navigation/RootStack';
import {NetWork, Block} from '@components';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Block flex>
      <RootStack />
      <NetWork />
    </Block>
  );
};

export default App;
