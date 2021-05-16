import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import RootStack from './src/navigation/RootStack';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <RootStack />;
};

export default App;
