import {NavigationAuth} from '@assets/svg/common';
import {Block, Button, Text} from '@components';
import {yupResolver} from '@hookform/resolvers/yup';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import actions from '@redux/actions';
import {theme} from '@theme';
import React from 'react';
import {useForm} from 'react-hook-form';
import {Keyboard, Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import LoginForm from './components/LoginForm';
import {validation} from './components/LoginForm/validation';
import SocialLogin from './components/SocialLogin';

import styles from './styles';

const INITIAL_VALUES = {
  email: '',
  password: '',
};
const Login = ({callBack}) => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.login);
  const config = useSelector(state => state.config?.data);

  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const {control, handleSubmit} = useForm({
    resolver: yupResolver(validation),
    mode: 'onChange',
    defaultValues: INITIAL_VALUES,
  });
  const onSubmit = values => {
    Keyboard.dismiss();
    dispatch({
      type: actions.LOGIN_ACCOUNT,
      body: {
        email: values.email,
        password: values.password,
        device_token: 'lala',
        device_name: 'name',
      },
    });
  };
  return (
    <Block flex backgroundColor="background" paddingTop={top + 40}>
      <Block paddingBottom={56} paddingHorizontal={12}>
        <Text size={32} fontType="semibold">
          Đăng nhập
        </Text>
      </Block>
      <LoginForm control={control} />
      <Block row justifyEnd alignCenter marginHorizontal={12} marginTop={16}>
        <Pressable onPress={() => navigation.navigate(routes.FORGOTPASSWORD)}>
          <Text style={styles.textForgot} size={14} paddingHorizontal={3}>
            Quên mật khẩu?
          </Text>
        </Pressable>
        <NavigationAuth />
      </Block>
      <Block marginTop={16} paddingHorizontal={12}>
        <Button
          onPress={handleSubmit(onSubmit)}
          title="ĐĂNG NHẬP"
          height={48}
          shadow
          style={styles.button_login}
          shadowColor={`${theme.colors.pink}20`}
          elevation={10}
          disabled={isLoading}
        />
      </Block>
      <Block alignCenter justifyCenter>
        <Block marginTop={20}>
          <Text color={theme.colors.black}>Hoặc Đăng nhập với </Text>
        </Block>
        <SocialLogin />
        <Block row marginTop={30} alignCenter justifyCenter>
          <Text center color={theme.colors.black}>
            Bạn chưa có tài khoản?{' '}
          </Text>
          <Pressable onPress={callBack}>
            <Text
              color={config?.backgroundcolor || theme.colors.pink}
              center
              fontType="bold">
              {' '}
              Đăng ký ngay
            </Text>
          </Pressable>
        </Block>
      </Block>
    </Block>
  );
};

export default Login;
