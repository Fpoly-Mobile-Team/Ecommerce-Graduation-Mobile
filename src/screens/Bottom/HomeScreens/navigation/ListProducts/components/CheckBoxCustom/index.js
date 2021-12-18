import {Block, Text} from '@components';
import React from 'react';
import {Pressable} from 'react-native';
import styles from './styles';
import {Correct} from '@assets/svg/common';
const CheckBoxCustom = ({PROP, value, setValue}) => {
  return (
    <Block paddingHorizontal={20} row>
      {PROP?.map(res => {
        return (
          <Block
            key={res.key}
            alignCenter
            paddingRight={20}
            marginVertical={8}
            row>
            <Pressable
              style={styles.rbStyle}
              onPress={() => setValue({key: res.key, text: res.text})}>
              {value.key === res.key && <Correct width={12} height={9} />}
            </Pressable>
            <Text alignCenter marginLeft={5} paddingBottom={3} size={13}>
              {res.text}
            </Text>
          </Block>
        );
      })}
    </Block>
  );
};
export default CheckBoxCustom;
