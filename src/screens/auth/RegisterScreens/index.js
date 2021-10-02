import {Block, Button, Text, TextInput} from '@components';
import CheckBox from '@components/CheckBox';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import actions from '@redux/actions';
import {theme} from '@theme';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Keyboard, Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import RegisterForm from './components/RegisterForm';
import styles from './styles';
import {validation} from './components/RegisterForm/validation';
import {routes} from '@navigation/routes';

const INITIAL_VALUES = {
  email: '',
  username: '',
  phone: '',
  password: '',
};

const Register = ({callBack}) => {
  const {top} = useSafeAreaInsets();
  const [isCheck, setisCheck] = useState(false);
  const config = useSelector(state => state.config?.data);
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.register);
  const {device_name, device_token} = useSelector(state => state.device);

  const {control, handleSubmit} = useForm({
    resolver: yupResolver(validation),
    mode: 'onChange',
    defaultValues: INITIAL_VALUES,
  });

  const onSubmit = values => {
    Keyboard.dismiss();
    dispatch({
      type: actions.SIGNUP_ACCOUNT,
      body: {
        email: values.email,
        username: values.username,
        phone: values.phone,
        password: values.password,
        device_token,
        device_name,
      },
    });
    callBack()
  };

  return (
    <Block flex backgroundColor="background" paddingTop={top + 40}>
      <Block marginBottom={56} paddingHorizontal={12}>
        <Text size={32} fontType="semibold">
          Đăng ký
        </Text>
      </Block>
      <RegisterForm control={control} />

      <Block paddingHorizontal={12} marginTop={20}>
        <CheckBox
          activeColor={theme.colors.black}
          title="Tôi đồng ý với điều khoản dịch vụ và chính sách quyền riêng tư"
          labelStyles={styles.textRules}
          setValue={setisCheck}
          value={isCheck}
        />
      </Block>
      <Block marginTop={20} paddingHorizontal={12}>
        <Button
          title="ĐĂNG KÝ"
          height={48}
          shadow
          onPress={handleSubmit(onSubmit)}
          shadowColor={`${theme.colors.pink}80`}
          elevation={10}
          disabled={isLoading}
          style={styles.borderButton}
        />
      </Block>
      <Block row marginTop={30} alignCenter justifyCenter>
        <Text color={theme.colors.black}>Bạn đã có tài khoản? </Text>
        <Pressable onPress={callBack}>
          <Text
            color={config?.backgroundcolor || theme.colors.pink}
            fontType="bold">
            {' '}
            Đăng nhập
          </Text>
        </Pressable>
      </Block>
    </Block>
  );
};

export default Register;
