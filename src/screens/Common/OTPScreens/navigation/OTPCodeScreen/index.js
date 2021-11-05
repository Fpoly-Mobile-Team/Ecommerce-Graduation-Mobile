import {images} from '@assets';
import {Block, Button, Header, Text} from '@components';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import React, {useRef, useState} from 'react';
import {Image, KeyboardAvoidingView, Pressable, TextInput} from 'react-native';
import styles from './styles';

const OTPCodeScreen = () => {
  const navigation = useNavigation();

  const [focus1, setFocus1] = useState(false);
  const [focus2, setFocus2] = useState(false);
  const [focus3, setFocus3] = useState(false);
  const [focus4, setFocus4] = useState(false);
  const customStyle1 = focus1 ? styles.inputStyleFocus : styles.inputStyle;
  const customStyle2 = focus2 ? styles.inputStyleFocus : styles.inputStyle;
  const customStyle3 = focus3 ? styles.inputStyleFocus : styles.inputStyle;
  const customStyle4 = focus4 ? styles.inputStyleFocus : styles.inputStyle;
  const pin1ref = useRef();
  const pin2ref = useRef();
  const pin3ref = useRef();
  const pin4ref = useRef();

  return (
    <Block flex backgroundColor={theme.colors.white}>
      <Header checkBackground canGoBack />
      <KeyboardAvoidingView
        style={styles.contentContainerStyle}
        behavior="padding">
        <Block flex alignCenter justifyCenter>
          <Image style={styles.image} source={images.otpcode} />
          <Text size={22} fontType="bold">
            OTP Verfitication
          </Text>
          <Block paddingTop={5} paddingBottom={35}>
            <Text size={15} center>
              Enter OTP sent to your phone number
            </Text>
          </Block>
          <Block row paddingBottom={30}>
            <TextInput
              ref={pin1ref}
              autoFocus={true}
              keyboardType="number-pad"
              maxLength={1}
              textAlign="center"
              style={customStyle1}
              onChangeText={text => {
                text && pin2ref.current.focus();
              }}
              onChange={() => setFocus1(true)}
            />
            <TextInput
              ref={pin2ref}
              maxLength={1}
              keyboardType="numeric"
              textAlign="center"
              style={customStyle2}
              onChangeText={text => {
                text ? pin3ref.current.focus() : pin1ref.current.focus();
              }}
              onChange={() => setFocus2(true)}
            />
            <TextInput
              ref={pin3ref}
              maxLength={1}
              keyboardType="numeric"
              textAlign="center"
              style={customStyle3}
              onChangeText={text => {
                text ? pin4ref.current.focus() : pin2ref.current.focus();
              }}
              onChange={() => setFocus3(true)}
            />
            <TextInput
              ref={pin4ref}
              maxLength={1}
              keyboardType="numeric"
              textAlign="center"
              style={customStyle4}
              onChangeText={text => {
                !text && pin3ref.current.focus();
              }}
              onChange={() => setFocus4(true)}
            />
          </Block>
          <Block row>
            <Text fontType="bold">Chưa có mã nào !</Text>
            <Pressable>
              <Text fontType="bold" color={theme.colors.paleGreen}>
                {' '}
                Gửi lại
              </Text>
            </Pressable>
          </Block>
          <Button
            onPress
            title="Tiếp tục"
            height={45}
            style={styles.btnContinue}
          />
        </Block>
      </KeyboardAvoidingView>
    </Block>
  );
};

export default OTPCodeScreen;
