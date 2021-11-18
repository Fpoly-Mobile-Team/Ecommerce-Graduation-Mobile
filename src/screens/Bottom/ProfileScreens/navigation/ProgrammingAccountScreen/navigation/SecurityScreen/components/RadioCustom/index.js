import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Animated, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';

const Radio = ({id, title, value, setValue}) => {
  const config = useSelector(state => state.config?.data);

  const scaled = id === value;

  return (
    <Block key={id} row alignCenter>
      <Pressable
        onPress={() => {
          setValue(id);
        }}
        style={styles.btn(config?.backgroundcolor)}>
        {scaled && (
          <Animated.View style={styles.btnchild(config?.backgroundcolor)} />
        )}
      </Pressable>
      <Text center color={theme.colors.placeholder} size={13} marginLeft={5}>
        {title}
      </Text>
    </Block>
  );
};

export default Radio;
