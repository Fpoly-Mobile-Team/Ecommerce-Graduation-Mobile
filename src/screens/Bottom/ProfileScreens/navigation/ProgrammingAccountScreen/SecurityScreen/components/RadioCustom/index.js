import React from 'react';
import {Block, Button, Text, TextInput, Header} from '@components';
import {theme} from '@theme';

import {Pressable} from 'react-native';

const Radio = ({id, title, value, setValue}) => {
  return (
    <Block key={id} row>
      <Pressable
      onPress={() => {setValue(title)}}
        style={{
          width: 20,
          height: 20,
          borderRadius: 20,
          borderColor: theme.colors.switchOn,
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {title === value && (
          <Block
            width={12}
            height={12}
            radius={12}
            backgroundColor={theme.colors.pink}></Block>
        )}
      </Pressable>
      <Text size={13} marginLeft={5} >{title}</Text>
    </Block>
  );
};

export default Radio;
