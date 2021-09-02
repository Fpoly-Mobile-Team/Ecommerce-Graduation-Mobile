import {Block, Text, Header, Button} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import React, {useState} from 'react';
import styles from './styles';
import {TextInput, Pressable, Image} from 'react-native';
import {icons} from '@assets';
import {FacebookGround, GoogleGround, NavigationAuth} from '@assets/svg/common';

const Login = ({callBack}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();
  return (
    <Block>
      <Block flex paddingVertical={94} backgroundColor="background">
        <Block paddingBottom={56} paddingHorizontal={12}>
          <Text size={32} fontType="semibold">
            Đăng nhập
          </Text>
        </Block>

        <Block
          shadow
          flex
          flexGrow
          marginHorizontal={12}
          radius={5}
          marginTop={5}
          marginBottom={8}
          paddingVertical={5}
          paddingHorizontal={12}
          backgroundColor={theme.colors.white}>
          <Block paddingTop={5}>
            <Text style={styles.textFilter} size={11}>
              Tên đăng nhập
            </Text>
          </Block>
          <Block paddingBottom={0}>
            <TextInput
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
              placeholder="ken.phong1802@gmail.com"
              placeholderTextColor={theme.colors.placeholder}
              style={styles.label}
            />
          </Block>
        </Block>

        <Block
          shadow
          flex
          flexGrow
          marginHorizontal={12}
          radius={5}
          marginBottom={5}
          paddingVertical={5}
          paddingHorizontal={12}
          backgroundColor={theme.colors.white}>
          <Block paddingTop={5}>
            <Text style={styles.textFilter} size={11}>
              Mật khẩu
            </Text>
          </Block>
          <Block paddingBottom={0}>
            <TextInput
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
              value="0123456789"
              placeholderTextColor={theme.colors.placeholder}
              style={styles.label}
            />
          </Block>
        </Block>
        <Block row justifyEnd alignCenter marginHorizontal={12} paddingTop={16}>
          <Pressable
          // onPress={() => navigation.navigate(routes.FORGOTPASSWORD)}
          >
            <Text style={styles.textForgot} size={14} paddingHorizontal={3}>
              Quên mật khẩu?
            </Text>
          </Pressable>
          <NavigationAuth />
        </Block>

        <Block marginTop={32} paddingHorizontal={12}>
          <Button
            onPress={callBack}
            title="ĐĂNG NHẬP"
            height={50}
            style={{
              backgroundColor: theme.colors.pink,
              elevation: 2,
              shadowColor: theme.colors.black,
            }}
          />
        </Block>

        <Block alignCenter justifyCenter>
          <Block paddingTop={49} paddingBottom={28}>
            <Text>Đăng nhập với mạng xã hội</Text>
          </Block>
          <Block row paddingBottom={106}>
            <Pressable
              onPress={() => console.log('Google Sign In')}
              paddingHorizontal={20}>
              <Image source={icons.google} />
            </Pressable>
            <Pressable
              onPress={() => console.log('Facebook Sign In')}
              paddingHorizontal={20}>
              <Image source={icons.facebook} />
            </Pressable>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default Login;
