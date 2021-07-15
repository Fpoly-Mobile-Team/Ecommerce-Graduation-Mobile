import {Block, Text} from '@components';
import React from 'react';
import {StyleSheet} from 'react-native';
import HeaderProflie from './components/HeaderProflie';

const ProfileScreens = () => {
  return (
    <Block>
      <HeaderProflie />
      <Text>ProfileScreens</Text>
    </Block>
  );
};

export default ProfileScreens;

const styles = StyleSheet.create({});
