import {Block} from '@components';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';

const ButtonSocial = ({icon, onPress, backgroundColor, ...props}) => {
  return (
    <Pressable onPress={onPress}>
      <Block
        radius={50}
        shadow
        alignCenter
        justifyCenter
        height={50}
        width={50}
        backgroundColor={backgroundColor}
        {...props}>
        <Image source={icon} style={styles.image} resizeMode="contain" />
      </Block>
    </Pressable>
  );
};

export default ButtonSocial;
