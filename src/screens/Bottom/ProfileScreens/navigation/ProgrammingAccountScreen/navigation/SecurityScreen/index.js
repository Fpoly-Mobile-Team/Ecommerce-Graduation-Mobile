import {Block, Button, Header, Text} from '@components';
import FormContainer from '@components/Form/FormContainer';
import {useNavigation} from '@react-navigation/native';
import actions from '@redux/actions';
import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import React, {useState} from 'react';
import {
  Keyboard,
  LayoutAnimation,
  Platform,
  StatusBar,
  UIManager,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useDispatch, useSelector} from 'react-redux';
import {DATA} from './components/data';
import FormEditInput from './components/FormEditInput';
import FormSecure from './components/FormSecure';
import Radio from './components/RadioCustom';
import styles from './styles';
import Notifi from './components/Notifi';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {validation} from './components/FormSecure/validation';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Security = () => {
  const [name, setName] = useState();
  const user = useSelector(state => state.tokenUser?.data);
  const userInfo = useSelector(state => state.userInfo?.data);
  const isLoading = useSelector(state => state.update_user?.isLoading);
  const isLoadingPassword = useSelector(
    state => state.update_password?.isLoading,
  );

  const parseDateToStringDMY = d => {
    if (d === undefined || d === null) {
      return '';
    }
    if (typeof d === 'string' && d.length <= 10) {
      return d;
    }
    const dateRs = new Date(d);
    const month = (dateRs.getMonth() + 1).toString().padStart(2, '0');
    return dateRs.getDate() + '/' + month + '/' + dateRs.getFullYear();
  };

  const [username, setUsername] = useState(userInfo?.username);
  const [birthday, setBirthday] = useState(
    parseDateToStringDMY(userInfo?.birthday),
  );
  const [phone, setPhone] = useState(userInfo?.phone);
  const [email, setEmail] = useState(userInfo?.email);

  const dispatch = useDispatch();

  const INITIAL_VALUES = {
    name: '',
    date: '',
    phone: '',
    email: '',
  };

  const {control, handleSubmit} = useForm({
    resolver: yupResolver(validation),
    mode: 'onChange',
    defaultValues: INITIAL_VALUES,
  });

  const onSubmit = () => {
    Keyboard.dismiss();
    dispatch({
      type: actions.UPDATE_USER,
      user,
      body: {
        username: username,
        birthday: parseDateToStringDMY(birthday),
        phone: phone,
        email: email,
        gender: checked,
      },
    });
  };

  const onSubmitPasword = values => {
    Keyboard.dismiss();
    dispatch({
      type: actions.UPDATE_PASSWORD,
      user,
      body: {
        currentPassword: values.currentPassword,
        password: values.password,
      },
    });
  };

  const [checked, setChecked] = useState(
    userInfo?.gender ? userInfo.gender : '0',
  );
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [date, setDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setBirthday(date);
    hideDatePicker();
  };

  const renderItem = item => {
    return (
      <Radio
        title={item.title}
        value={checked}
        setValue={setChecked}
        id={item.id}
        key={item.id}
      />
    );
  };

  return (
    <Block flex backgroundColor="background">
      <FormContainer>
        <StatusBar barStyle="dark-content" translucent animated />
        <Header canGoBack checkBackground title="Bảo mật" />
        <Block marginTop={20} paddingBottom={16} paddingHorizontal={12}>
          <Text size={16} fontType="semibold">
            Thông tin người dùng
          </Text>
        </Block>
        <FormEditInput
          Name={[name, setName]}
          Username={[username, setUsername]}
          Birthday={[birthday, setBirthday]}
          Phone={[phone, setPhone]}
          Email={[email, setEmail]}
          showDatePicker={showDatePicker}
        />

        <Block paddingHorizontal={12}>
          <Block
            radius={5}
            backgroundColor="white"
            padding={8}
            borderWidth={1}
            borderColor={theme.colors.smoke}>
            <Text
              marginLeft={10}
              size={12}
              color={theme.colors.lightGray}
              fontType="400">
              Giới tính
            </Text>
            <Block
              row
              alignCenter
              space="between"
              marginTop={8}
              paddingHorizontal={12}>
              {DATA.map(renderItem)}
            </Block>
          </Block>
        </Block>

        <Block
          alignCenter
          row
          space="between"
          paddingTop={16}
          paddingBottom={4}
          paddingHorizontal={12}>
          <Text size={16} fontType="semibold">
            Mật khẩu
          </Text>
          <Button
            onPress={() => {
              LayoutAnimation.easeInEaseOut();
              setShow(!show);
            }}
            title={show ? 'Làm gọn' : 'Hiển thị'}
            width={width / 5}
            height={32}
            shadow
            elevation={10}
            style={{borderRadius: getSize.s(30)}}
          />
        </Block>
        {show && <FormSecure control={control} />}
        <Notifi />
        <Block marginBottom={10} paddingHorizontal={12}>
          <Button
            disabled={show ? isLoadingPassword : isLoading}
            onPress={show ? handleSubmit(onSubmitPasword) : onSubmit}
            title="CẬP NHẬT"
            height={45}
            style={styles.button}
            shadow
            elevation={5}
          />
        </Block>
      </FormContainer>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Block>
  );
};

export default Security;
