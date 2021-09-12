import {icons} from '@assets';
import {Block} from '@components';
import {theme} from '@theme';
import React from 'react';
import ButtonSocial from '../ButtonSocial';
const SocialLogin = () => {
  return (
    <Block row alignCenter marginTop={20}>
      <ButtonSocial
        onPress={() => console.log('google')}
        icon={icons.google}
        backgroundColor={theme.colors.white}
      />
      <ButtonSocial
        onPress={() => console.log('face')}
        icon={icons.facebook}
        backgroundColor={theme.colors.blue}
        marginLeft={28}
      />
    </Block>
  );
};

export default SocialLogin;
