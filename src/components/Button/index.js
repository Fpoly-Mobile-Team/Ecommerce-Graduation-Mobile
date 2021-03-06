import {Block, Text} from '@components';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Pressable} from 'react-native';
import {UIActivityIndicator} from 'react-native-indicators';
import {useSelector} from 'react-redux';

const Button = ({
  title,
  height,
  width,
  onPress,
  titleStyle,
  style,
  disabled,
  ...props
}) => {
  const config = useSelector(state => state.config?.data);
  return (
    <Pressable onPress={onPress}>
      <Block
        alignCenter
        justifyCenter
        height={height}
        width={width}
        radius={height}
        marginVertical={10}
        style={style}
        backgroundColor={config?.backgroundcolor || theme.colors.pink}
        {...props}>
        {disabled ? (
          <UIActivityIndicator size={getSize.s(20)} color="white" />
        ) : (
          <Text fontType="bold" color={theme.colors.white} style={titleStyle}>
            {title}
          </Text>
        )}
      </Block>
    </Pressable>
  );
};

export default Button;
