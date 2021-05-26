import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Pressable} from 'react-native';

const Button = ({title, onPress, titleStyle, style}) => {
  return (
    <Pressable onPress={onPress}>
      <Block
        alignCenter
        justifyCenter
        height={45}
        radius={45}
        marginVertical={20}
        style={style}
        backgroundColor="#ff5555">
        <Text fontType="semibold" color={theme.colors.white} style={titleStyle}>
          {title}
        </Text>
      </Block>
    </Pressable>
  );
};

export default Button;
