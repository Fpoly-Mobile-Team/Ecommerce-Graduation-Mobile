import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import RootStack from './navigation/RootStack';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <RootStack />;
};

export default App;
