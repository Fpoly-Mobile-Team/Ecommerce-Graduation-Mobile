import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import HeaderProfile from './components/HeaderProfile';
import AvatarProfile from './components/AvatarProfile';
import ContentProfile from './components/ContentProfile';

const ProfileScreens = () => {
  return (
    <Block flex backgroundColor={theme.colors.white}>
      <HeaderProfile />
      <ScrollView>
        <AvatarProfile />
        <ContentProfile />
      </ScrollView>
    </Block>
  );
};

export default ProfileScreens;

const styles = StyleSheet.create({});
