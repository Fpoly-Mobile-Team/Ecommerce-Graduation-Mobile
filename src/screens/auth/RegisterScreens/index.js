import {Block, Button, Text} from '@components';
import {yupResolver} from '@hookform/resolvers/yup';
import actions from '@redux/actions';
import {theme} from '@theme';
import {Toast} from '@utils/helper';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Keyboard, Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import CheckBox from './components/CheckBox';
import ModalTermOfUse from './components/ModalTermOfUse';
import RegisterForm from './components/RegisterForm';
import {validation} from './components/RegisterForm/validation';
import styles from './styles';

const INITIAL_VALUES = {
  email: '',
  username: '',
  phone: '',
  password: '',
};

const Register = ({callBack}) => {
  const {top} = useSafeAreaInsets();
  const [isCheck, setIsCheck] = useState(false);
  const [isAccept, setIsAccept] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const config = useSelector(state => state.config?.data);

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
    if (isAccept && isCheck) {
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
      callBack();
    } else {
      Toast('Vui lòng chấp nhận điều khoản');
    }
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
          label="Tôi đồng ý với điều khoản dịch vụ và chính sách quyền riêng tư"
          isCheck={isCheck}
          setIsCheck={setIsCheck}
          onPress={() => {
            setIsShow(true);
          }}
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
      <ModalTermOfUse
        isVisible={isShow}
        setIsVisible={setIsShow}
        isAccept={isAccept}
        setIsAccept={setIsAccept}
      />
    </Block>
  );
};

export default Register;
