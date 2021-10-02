import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Animated, Pressable} from 'react-native';
import styles from './styles';

const Radio = ({id, title, value, setValue}) => {
  const scaled = id === value;

  return (
    <Block key={id} row alignCenter>
      <Pressable
        onPress={() => {
          setValue(id);
        }}
        style={styles.btn}>
        {scaled && <Animated.View style={styles.btnchild} />}
      </Pressable>
      <Text center color={theme.colors.placeholder} size={13} marginLeft={5}>
        {title}
      </Text>
    </Block>
  );
};

export default Radio;
