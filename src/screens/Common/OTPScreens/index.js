import {images} from '@assets';
import {Block, Button, Header, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import styles from './styles';
import React, {useState} from 'react';
import {Image, TextInput, KeyboardAvoidingView} from 'react-native';

const OTPScreen = () => {
  const navigation = useNavigation();
  const [focus, setFocus] = useState(false);
  const customStyle = focus ? styles.inputStyleFocus : styles.inputStyle;

  return (
    <Block flex backgroundColor={theme.colors.white}>
      <Header checkBackground canGoBack />
      <KeyboardAvoidingView
        style={styles.contentContainerStyle}
        behavior="padding">
        <Block flex alignCenter justifyCenter>
          <Image style={styles.image} source={images.otpphone} />
          <Text size={22} fontType="bold">
            OTP Verfitication
          </Text>
          <Block paddingTop={5} paddingBottom={35} width={280}>
            <Text size={15} center>
              We will send you and <Text fontType="bold">On Time Password</Text>{' '}
              on this phone number
            </Text>
          </Block>
          <Block alignStart height={30}>
            <Text size={12} color={theme.colors.gray}>
              Số điện thoại
            </Text>
            <TextInput
              autoFocus={true}
              keyboardType="number-pad"
              style={customStyle}
              onFocus={() => setFocus(true)}
            />
          </Block>
          <Button
            onPress={() => navigation.navigate(routes.OTPCODESCREENS)}
            title="Tiếp tục"
            height={45}
            style={styles.btnContinue}
          />
        </Block>
      </KeyboardAvoidingView>
    </Block>
  );
};

export default OTPScreen;
