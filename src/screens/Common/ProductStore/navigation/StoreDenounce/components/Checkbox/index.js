import {Block, Text} from '@components';
import React, {useState} from 'react';
import {Pressable} from 'react-native';
import styles from './styles';
import {Correct} from '@assets/svg/common';
const CheckBox = ({PROP, value, setValue}) => {
  
  return (
    <Block paddingHorizontal={10}>
      {PROP.map(res => {
        return (
          <Block
            key={res.key}
            alignCenter
            paddingRight={10}
            marginVertical={8}
            row>
            <Pressable style={styles.rbStyle} onPress={() => setValue({key: res.key,text: res.text})}>
              {value.key === res.key && <Correct />}
            </Pressable>
            <Text alignCenter marginLeft={18} paddingBottom={3} size={15}>
              {res.text}
            </Text>
          </Block>
        );
      })}
    </Block>
  );
};
export default CheckBox;
