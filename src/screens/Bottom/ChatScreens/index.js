import {Block, Header} from '@components';
import {theme} from '@theme';
import React from 'react';
import {StyleSheet} from 'react-native';

const ChatScreens = () => {
  return (
    <Block flex backgroundColor={theme.colors.white}>
      <Header title="Tin nhắn" />
    </Block>
  );
};

export default ChatScreens;

const styles = StyleSheet.create({});
