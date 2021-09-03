import {icons} from '@assets';
import {NavigationAuth} from '@assets/svg/common';
import {Block, Button, Text, TextInput} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ButtonSocial from './components/ButtonSocial';
import styles from './styles';

const Login = ({callBack}) => {
  const {top} = useSafeAreaInsets();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();

  return (
    <Block>
      <Block flex backgroundColor="background" paddingTop={top + 40}>
        <Block paddingBottom={56} paddingHorizontal={12}>
          <Text size={32} fontType="semibold">
            Đăng nhập
          </Text>
        </Block>
        <Block paddingHorizontal={12}>
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
            rightstyle={{bottom: 12}}
            placeholder="Nhập password"
            onChangeText={text => setPassword(text)}
            isSecure
          />
        </Block>

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
            onPress={callBack}
            title="ĐĂNG NHẬP"
            height={50}
            shadow
            style={{borderRadius: 5}}
            backgroundColor={theme.colors.pink}
            shadowColor={`${theme.colors.pink}20`}
            elevation={10}
          />
        </Block>

        <Block alignCenter justifyCenter>
          <Block marginTop={20}>
            <Text color={theme.colors.black}>Hoặc Đăng nhập với </Text>
          </Block>

          <Block row alignCenter marginTop={20}>
            <ButtonSocial
              onPress={() => console.log('google')}
              icon={icons.google}
              backgroundColor={theme.colors.white}
            />
            <ButtonSocial
              onPress={() => console.log('face')}
              icon={icons.facebook}
              backgroundColor={theme.colors.blue}
              marginLeft={28}
            />
          </Block>
          <Block row marginTop={30} alignCenter justifyCenter>
            <Text color={theme.colors.black}>Bạn chưa có tài khoản ? </Text>
            <Pressable onPress={callBack}>
              <Text color={theme.colors.pink} fontType="bold">
                {' '}
                Đăng ký ngay
              </Text>
            </Pressable>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default Login;
