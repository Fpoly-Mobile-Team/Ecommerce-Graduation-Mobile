import {Block, Text} from '@components';
import React from 'react';
import {View, StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

const HeaderProflie = () => {
  const isFocused = useIsFocused();

  return (
    <Block>
      {isFocused && <StatusBar barStyle="dark-content" translucent animated />}
      <Text></Text>
    </Block>
  );
};

export default HeaderProflie;
