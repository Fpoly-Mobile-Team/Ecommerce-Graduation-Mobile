import {Block, Button, Text, TextInput} from '@components';
import CheckBox from '@components/CheckBox';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

const Register = ({callBack}) => {
  const [isCheck, setisCheck] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [reqpassword, setreqPassword] = useState();
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();

  return (
    <Block flex backgroundColor="background" paddingTop={top + 40}>
      <Block marginBottom={56} paddingHorizontal={12}>
        <Text size={32} fontType="semibold">
          Đăng ký
        </Text>
      </Block>
      <Block paddingHorizontal={12}>
        <TextInput
          label="Họ và tên"
          containerInputStyle={styles.containerInputStyle}
          labelStyle={styles.label}
          inputStyle={styles.inputStyle}
          placeholder="Nhập họ và tên"
          onChangeText={text => setName(text)}
        />
        <TextInput
          label="Email"
          containerInputStyle={styles.containerInputStyle}
          labelStyle={styles.label}
          inputStyle={styles.inputStyle}
          keyboardType="email-address"
          placeholder="Nhập email"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          label="Mật khẩu"
          containerInputStyle={styles.containerInputStyle}
          labelStyle={styles.label}
          inputStyle={styles.inputStyle}
          keyboardType="email-address"
          placeholder="Nhập mật khẩu"
          rightstyle={{bottom: 12}}
          onChangeText={text => setPassword(text)}
          isSecure
        />
        <TextInput
          label="Xác nhận mật khẩu"
          containerInputStyle={styles.containerInputStyle}
          labelStyle={styles.label}
          inputStyle={styles.inputStyle}
          rightstyle={{bottom: 12}}
          placeholder="Nhập lại mật khẩu"
          onChangeText={text => setreqPassword(text)}
          isSecure
        />
      </Block>
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
          height={50}
          shadow
          backgroundColor={theme.colors.pink}
          onPress={callBack}
          shadowColor={`${theme.colors.pink}80`}
          elevation={10}
          style={{borderRadius: 5}}
        />
      </Block>
      <Block row marginTop={30} alignCenter justifyCenter>
        <Text color={theme.colors.black}>Bạn có tài khoản ? </Text>
        <Pressable onPress={callBack}>
          <Text color={theme.colors.pink} fontType="bold">
            {' '}
            Đăng nhập
          </Text>
        </Pressable>
      </Block>
    </Block>
  );
};

export default Register;
