import React, {useState} from 'react';
import Login from '../LoginScreens';
import Register from '../RegisterScreens';
import FormContainer from '@components/Form/FormContainer';
import {StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {theme} from '@theme';

const AuthForScreens = () => {
  const [value, setValue] = useState(true);
  const isFocused = useIsFocused();
  return (
    <FormContainer style={{backgroundColor: theme.colors.background}}>
      {isFocused && <StatusBar barStyle="dark-content" translucent animated />}
      {value ? (
        <Login callBack={() => setValue(!value)} />
      ) : (
        <Register callBack={() => setValue(!value)} />
      )}
    </FormContainer>
  );
};

export default AuthForScreens;
