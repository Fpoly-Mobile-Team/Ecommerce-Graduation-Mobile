/* eslint-disable react-native/no-inline-styles */
import {icons} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Image, TextInput} from 'react-native';
import styles from './styles';

const InputText = ({
  setRef,
  iconLeft,
  testLeft,
  testStyle,
  placeholder,
  keyboardType,
  onChangeText,
  onChange,
  value,
  style,
  containerStyle,
  inputStyle,
  isSecure,
  isError,
  errorText,
  errorContainerStyle,
  contentRight,
  errorTextStyles,
  onFocus,
  returnKeyType,
  onSubmitEditing,
  colorErr,
  colorNotErr,
}) => {
  const ColorErr = colorErr || theme.colors.red;
  const ColorNotErr = colorNotErr || theme.colors.smoke;

  const _renderError = () => (
    <Block
      row
      alignCenter
      paddingVertical={5}
      paddingHorizontal={15}
      style={errorContainerStyle}>
      <Image
        source={icons.warning}
        resizeMode="contain"
        style={styles.icoWarning}
      />
      <Text
        style={errorTextStyles}
        marginLeft={5}
        size={11}
        color={theme.colors.red}>
        {errorText}
      </Text>
    </Block>
  );

  return (
    <Block style={containerStyle}>
      <Block
        row
        flex
        alignCenter
        paddingHorizontal={12}
        radius={45}
        backgroundColor="white"
        borderWidth={0.5}
        borderColor={isError ? ColorErr : ColorNotErr}
        style={style}>
        {testLeft || iconLeft ? (
          <Block row alignCenter>
            {iconLeft && (
              <Image
                source={iconLeft}
                resizeMode={'contain'}
                style={{
                  ...styles.iconLeft,
                  tintColor: isError ? theme.colors.red : theme.colors.grays,
                }}
              />
            )}
            <Text
              style={{
                ...testStyle,
              }}>
              {testLeft}
            </Text>
          </Block>
        ) : null}
        <TextInput
          ref={setRef}
          style={{flex: 1, ...inputStyle}}
          secureTextEntry={isSecure}
          placeholder={placeholder}
          keyboardType={keyboardType}
          placeholderTextColor={theme.colors.placeholder}
          value={value}
          onChangeText={text => onChangeText(text)}
          onFocus={onFocus}
          onChange={onChange}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
        />
        {contentRight && contentRight()}
      </Block>
      {isError && Boolean(errorText) && _renderError()}
    </Block>
  );
};

export default InputText;
