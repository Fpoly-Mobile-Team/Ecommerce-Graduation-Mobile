import {Block, Button, Text, TextInput} from '@components';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import React, {useState} from 'react';
import {Pressable, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import styles from './styles';

const Forgot = () => {
  const [email, setEmail] = useState();
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();

  const config = useSelector(state => state.config?.data);

  return (
    <Block flex backgroundColor="background" paddingTop={top + 40}>
      <StatusBar barStyle="dark-content" translucent animated />
      <Block marginBottom={56} paddingHorizontal={12}>
        <Text size={32} fontType="semibold">
          Quên mật khẩu
        </Text>
      </Block>
      <Block paddingHorizontal={12} paddingBottom={16}>
        <Text size={13}>
          Please, enter your email address. You will receive a link to create a
          new password via email.
        </Text>
      </Block>
      <Block paddingHorizontal={12}>
        <TextInput
          label="Email"
          containerInputStyle={styles.containerInputStyle}
          labelStyle={styles.label}
          inputStyle={styles.inputStyle}
          keyboardType="email-address"
          placeholder="Nhập email cần xác nhận"
          onChangeText={text => setEmail(text)}
        />
      </Block>
      <Block marginTop={20} paddingHorizontal={12}>
        <Button title="GỬI XÁC NHẬN" height={48} shadow elevation={10} />
      </Block>
      <Block row marginTop={30} alignCenter justifyCenter>
        <Text color={theme.colors.black}>Bạn đã nhớ tài khoản? </Text>
        <Pressable onPress={() => navigation.goBack()}>
          <Text color={config?.backgroundcolor} fontType="bold">
            {' '}
            Đăng nhập
          </Text>
        </Pressable>
      </Block>
    </Block>
  );
};

export default Forgot;
