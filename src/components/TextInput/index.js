import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {isEmpty} from 'lodash';
import React, {useState} from 'react';
import {Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Block from '../Block';
import Text from '../Text';
import styles from './styles';

const InputText = ({...props}) => {
  const {
    ref,
    label,
    labelStyle,
    containerInputStyle,
    fontType,
    color,
    size,
    isSecure,
    rightIcon,
    leftIcon,
    maxHeight,
    maxLength,
    inputStyle,
    errorText,
    isError,
    disabled,
    errorContainerStyle,
    rightstyle,
    ...inputProps
  } = props;
  const [secureEye, setSecureEye] = useState(true);

  const textStyle = [
    styles.resetStyles,
    fontType && {
      fontFamily: theme.fonts.fontFamily[fontType],
    },
    !fontType && {fontFamily: theme.fonts.fontFamily.regular},
    color && {color: theme.colors[color]},
    color && !theme.colors[color] && {color: color},
    !color && {color: theme.colors.text},
    styles.defaultStyles,
    (rightIcon || isSecure) && {paddingRight: getSize.m(50)},
    props.multiline && maxHeight ? {maxHeight} : {height: getSize.m(21) * 2},
    leftIcon && {paddingLeft: getSize.m(38)},
    {fontSize: getSize.m(size ? size : 14)},
    {...StyleSheet.flatten(inputProps.style)},
  ];

  const _renderSecureIcon = () => {
    return (
      <TouchableOpacity
        style={{...styles.rightIcon, ...rightstyle}}
        hitSlop={{left: 5, right: 5, bottom: 5, top: 5}}
        onPress={() => setSecureEye(!secureEye)}>
        <FontAwesomeIcon
          name={secureEye ? 'eye' : 'eye-slash'}
          color={theme.colors.text}
          size={getSize.m(14)}
        />
      </TouchableOpacity>
    );
  };

  const _renderLabel = () => (
    <Text marginBottom={5} style={labelStyle}>
      {label}
    </Text>
  );

  const _renderError = () => (
    <Block row alignCenter paddingVertical={3} style={errorContainerStyle}>
      <Ionicons
        name="ios-warning"
        color={theme.colors.red}
        size={getSize.m(11)}
      />
      <Text marginLeft={6} size={12} color={theme.colors.red}>
        {errorText}
      </Text>
    </Block>
  );

  const _renderInput = () => {
    return (
      <TextInput
        ref={ref}
        autoCorrect={false}
        textAlignVertical={props.multiline ? 'top' : 'center'}
        placeholder={!isEmpty(label) && leftIcon ? props.placeholder : ''}
        placeholderTextColor={theme.colors.placeholder}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        secureTextEntry={secureEye && isSecure}
        maxLength={maxLength}
        style={textStyle}
        editable={!disabled}
        {...inputProps}
      />
    );
  };

  return (
    <Block flexShrink style={containerInputStyle}>
      {!isEmpty(label) && _renderLabel()}
      <Block
        style={[
          styles.inputContainer,
          {
            borderColor: isError ? theme.colors.red : theme.colors.lightGray,
          },
          StyleSheet.flatten(inputStyle),
        ]}>
        {leftIcon && (
          <Image
            source={leftIcon}
            resizeMode="contain"
            style={{
              ...styles.leftIcon,
              tintColor: isError ? theme.colors.red : theme.colors.placeholder,
            }}
          />
        )}
        {_renderInput()}
        {isSecure ? _renderSecureIcon() : rightIcon && rightIcon()}
      </Block>
      {isError && Boolean(errorText) && _renderError()}
    </Block>
  );
};

export default InputText;
