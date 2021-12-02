import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Pressable, TextInput} from 'react-native';
import styles from './styles';
import {IconForward} from '@assets/svg/common';

const ItemEvent = ({
  onPress,
  characterCount,
  placeholder,
  placeholderTextColor,
  onChangeText,
  value,
  keyboardType,
  iconForward,
  maxLength,
  editable,
  style,
}) => {
  return (
    <Pressable onPress={onPress}>
      <Block
        style={{...style}}
        alignCenter
        row
        space="between"
        backgroundColor={theme.colors.white}
        paddingHorizontal={12}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType}
          maxLength={maxLength}
          editable={editable ? false : true}
          style={styles.input}
        />
        {iconForward ? (
          <IconForward width={12} height={12} />
        ) : characterCount && (
          <Text
            color={theme.colors.holder}
            size={12}
            fontType="medium"
            marginTop={-17.5}>
            {characterCount}
          </Text>
        )}
      </Block>
    </Pressable>
  );
};

export default ItemEvent;
