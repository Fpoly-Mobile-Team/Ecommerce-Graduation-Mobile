import React, {useState} from 'react';
import Login from '../LoginScreens';
import Register from '../RegisterScreens';
import Forgot from './../ForgotPassword/';
import FormContainer from '@components/Form/FormContainer';

const AuthForScreens = () => {
  const [value, setValue] = useState(true);
  return (
    <FormContainer>
      {value ? <Login callBack={() => setValue(!value)} /> : <Register />}
    </FormContainer>
  );
};

export default AuthForScreens;
