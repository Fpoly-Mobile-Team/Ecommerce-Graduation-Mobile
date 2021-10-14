import {icons} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';

const CheckBox = ({label, isCheck, setIsCheck, onPress}) => {
  const onPressButton = () => {
    setIsCheck(!isCheck);
    onPress();
  };
  return (
    <Block row>
      <Pressable
        style={styles.button}
        width={20}
        borderWidth={1}
        height={20}
        borderColor={theme.colors.smoke}
        onPress={onPressButton}
        backgroundColor={isCheck ? theme.colors.black : theme.colors.white}>
        <Image
          style={styles.icon}
          source={icons.check_blank}
          resizeMode="contain"
        />
      </Pressable>
      {label && (
        <Text flex marginLeft={5}>
          {label}
        </Text>
      )}
    </Block>
  );
};

export default CheckBox;
