// import {appleAuth} from '@invertase/react-native-apple-authentication';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import jwt_decode from 'jwt-decode';
import {useState} from 'react';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';

GoogleSignin.configure();

const useSocialLogin = () => {
  const [fetching, setFetching] = useState(false);
  const [data, setData] = useState(null);

  const handleLoginFacebook = async () => {
    setFetching(true);
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      setFetching(false);
    } else {
      const res = await AccessToken.getCurrentAccessToken();
      fetch(
        'https://graph.facebook.com/v2.5/me?fields=email,first_name,last_name,name,picture.type(large)&access_token=' +
          res.accessToken.toString(),
      )
        .then(async response => {
          const value = await response.json();
          setFetching(false);
          setData({value, type: 'facebook'});
        })
        .catch(() => {
          setFetching(false);
        });
    }
  };

  const handleLoginGoogle = async () => {
    setFetching(true);
    try {
      await GoogleSignin.hasPlayServices();
      const value = await GoogleSignin.signIn();
      setFetching(false);
      setData({value, type: 'google'});
    } catch (error) {
      console.error(error);
      setFetching(false);
    }
  };

  // const handleLoginApple = async () => {
  //   setFetching(true);
  //   try {
  //     const appleAuthRequestResponse = await appleAuth.performRequest({
  //       requestedOperation: appleAuth.Operation.LOGIN,
  //       requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
  //     });
  //     const {identityToken} = appleAuthRequestResponse;
  //     let value = jwt_decode(identityToken);
  //     setFetching(false);
  //     setData({value, type: 'apple'});
  //   } catch (error) {
  //     console.error(error);
  //     setFetching(false);
  //   }
  // };

  return {
    fetching,
    data,
    handleLoginFacebook,
    handleLoginGoogle,
    // handleLoginApple,
  };
};

export default useSocialLogin;
