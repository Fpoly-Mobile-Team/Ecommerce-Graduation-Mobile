import {Block} from '@components';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import React from 'react';
import {ScrollView} from 'react-native';
import AvatarProfile from './components/AvatarProfile';
import ContentProfile from './components/ContentProfile';
import HeaderProfile from './components/HeaderProfile';

const ProfileScreens = () => {
  return (
    <Block flex backgroundColor={theme.colors.white}>
      <HeaderProfile />
      <ScrollView showsVerticalScrollIndicator={false}>
        <AvatarProfile />
        <Block
          height={8}
          marginTop={10}
          width={width}
          backgroundColor={theme.colors.smoke}
        />
        <ContentProfile />
      </ScrollView>
    </Block>
  );
};

export default ProfileScreens;
