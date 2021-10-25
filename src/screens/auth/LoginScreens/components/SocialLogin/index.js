import {icons} from '@assets';
import {Block} from '@components';
import {theme} from '@theme';
import React, {useEffect} from 'react';
import ButtonSocial from '../ButtonSocial';
import {useSocialLogin} from '@hooks';
import {useSelector, useDispatch} from 'react-redux';
import actions from '@redux/actions';
//errr

const SocialLogin = () => {
  const dispatch = useDispatch();
  const {device_name, device_token} = useSelector(state => state.device);
  const {data, handleLoginFacebook, handleLoginGoogle} = useSocialLogin();
  useEffect(() => {
    try {
      if (data) {
        const {value, type} = data;
        if (value) {
          if (type === 'facebook') {
            dispatch({
              type: actions.LOGIN_FACEBOOK,
              body: {
                info: JSON.stringify(value),
                device_name,
                device_token,
              },
            });
          } else if (type === 'google') {
            dispatch({
              type: actions.LOGIN_GOOGLE,
              body: {
                info: JSON.stringify(value),
                device_name,
                device_token,
              },
            });
          }
        }
      }
    } catch (error) {
      console.log('error', error);
    }
  }, [data, device_name, device_token, dispatch]);

  return (
    <Block row alignCenter marginTop={20}>
      <ButtonSocial
        onPress={handleLoginGoogle}
        icon={icons.google}
        backgroundColor={theme.colors.white}
      />
      <ButtonSocial
        onPress={handleLoginFacebook}
        icon={icons.facebook}
        backgroundColor={theme.colors.blue}
        marginLeft={28}
      />
    </Block>
  );
};

export default SocialLogin;
