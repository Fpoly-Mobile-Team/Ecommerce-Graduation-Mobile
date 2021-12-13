import {images} from '@assets';
import {Block, Button, Header, Text} from '@components';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import React, {useRef, useState, useEffect} from 'react';
import {Platform, Image, KeyboardAvoidingView, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import CustomTextInput from './components/CustomTextInput';
import {routes} from '@navigation/routes';

const OTPCodeScreen = ({route}) => {
  const navigation = useNavigation();
  const [otpArray, setOtpArray] = useState(['', '', '', '']);
  const [confirm, setConfirm] = useState(null);
  const config = useSelector(state => state.config?.data);

  const code = otpArray.join('');

  const firstTextInputRef = useRef(null);
  const secondTextInputRef = useRef(null);
  const thirdTextInputRef = useRef(null);
  const fourthTextInputRef = useRef(null);
  const fivthTextInputRef = useRef(null);
  const sixthTextInputRef = useRef(null);

  const {phoneNumber, phoneInput} = route.params || {};
  const isAndroid = Platform.OS === 'android';

  console.log('PHNFNFN', phoneInput, phoneNumber);

  const refCallback = textInputRef => node => {
    textInputRef.current = node;
  };

  useEffect(() => {
    signInWithPhoneNumber();
  }, []);

  async function signInWithPhoneNumber() {
    const phone = phoneNumber ? phoneNumber : phoneInput.substring(2);
    try {
      const confirmation = await auth().verifyPhoneNumber('+84' + phone);
      setConfirm(confirmation);
      console.log('Cofirm', confirmation);
    } catch (e) {
      alert(JSON.stringify(e));
    }
  }

  console.log('ANHHHA', otpArray.join(''), confirm);

  const confirmCode = async () => {
    try {
      const response = await confirm.confirm(code);
      if (response) {
        Alert.alert('Xác thực thành công');
        navigation.navigate(routes.HOMESCREENS);
      }
    } catch (e) {
      alert(JSON.stringify(e));
    }
  };
  const onOtpChange = index => {
    return value => {
      if (isNaN(Number(value))) {
        return;
      }
      const otpArrayCopy = otpArray.concat();
      otpArrayCopy[index] = value;
      setOtpArray(otpArrayCopy);
      // console.log('OTP1', otpArray);

      if (value !== '') {
        if (index === 0) {
          secondTextInputRef.current.focus();
        } else if (index === 1) {
          thirdTextInputRef.current.focus();
        } else if (index === 2) {
          fourthTextInputRef.current.focus();
        } else if (index === 3) {
          fivthTextInputRef.current.focus();
        } else if (index === 4) {
          sixthTextInputRef.current.focus();
        }
      }
    };
  };

  const onOtpKeyPress = index => {
    return ({nativeEvent: {key: value}}) => {
      if (value === 'Backspace' && otpArray[index] === '') {
        if (index === 1) {
          firstTextInputRef.current.focus();
        } else if (index === 2) {
          secondTextInputRef.current.focus();
        } else if (index === 3) {
          thirdTextInputRef.current.focus();
        } else if (index === 4) {
          fourthTextInputRef.current.focus();
        } else if (index === 5) {
          fivthTextInputRef.current.focus();
        }

        if (isAndroid && index > 0) {
          const otpArrayCopy = otpArray.concat();
          otpArrayCopy[index - 1] = '';
          setOtpArray(otpArrayCopy);
          // console.log('OTP1', otpArrayCopy);
        }
      }
    };
  };

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
              Enter OTP sent to +84{' '}
              {phoneNumber ? phoneNumber.substring(1) : phoneInput.substring(2)}
            </Text>
          </Block>
          <Block row paddingHorizontal={20} paddingBottom={30}>
            {[
              firstTextInputRef,
              secondTextInputRef,
              thirdTextInputRef,
              fourthTextInputRef,
              fivthTextInputRef,
              sixthTextInputRef,
            ].map((textInputRef, index) => (
              <CustomTextInput
                containerStyle={{flex: 1}}
                value={otpArray[index]}
                onKeyPress={onOtpKeyPress(index)}
                onChangeText={onOtpChange(index)}
                keyboardType={'numeric'}
                maxLength={1}
                autoFocus={index === 0 ? true : undefined}
                refCallback={refCallback(textInputRef)}
                key={index}
              />
            ))}
          </Block>
          <Block row>
            <Text fontType="bold">Chưa có mã nào !</Text>
            <Pressable>
              <Text fontType="bold" color={config?.backgroundcolor}>
                {' '}
                Gửi lại
              </Text>
            </Pressable>
          </Block>

          <Button
            onPress={() => confirmCode()}
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
