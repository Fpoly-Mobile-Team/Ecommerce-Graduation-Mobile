import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Pressable} from 'react-native';

const Button = ({title, height, onPress, titleStyle, style}) => {
  return (
    <Pressable onPress={onPress}>
      <Block
        alignCenter
        justifyCenter
        height={height}
        radius={height}
        marginVertical={10}
        style={style}>
        <Text fontType="semibold" color={theme.colors.white} style={titleStyle}>
          {title}
        </Text>
      </Block>
    </Pressable>
  );
};

export default Button;
