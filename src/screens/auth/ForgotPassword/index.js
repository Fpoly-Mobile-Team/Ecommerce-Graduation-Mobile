import {Block, Text, Header, Button} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import React, {useState} from 'react';
import styles from './styles';
import {TextInput, Pressable, Image} from 'react-native';
import {icons} from '@assets';
import {NavigationAuth} from '@assets/svg/common';

const Forgot = () => {
  const [email, setEmail] = useState();
  const navigation = useNavigation();
  return (
    <Block style={styles.container} backgroundColor="background">
      <Block>
        <Block flex paddingVertical={94}>
          <Block paddingBottom={66} paddingHorizontal={12}>
            <Text size={32} fontType="semibold">
              Quên mật khẩu
            </Text>
          </Block>
          <Block paddingHorizontal={12} paddingBottom={16}>
            <Text size={13}>
              Please, enter your email address. You will receive a link to
              create a new password via email.
            </Text>
          </Block>
          <Block
            shadow
            shadowColor={theme.colors.black}
            elevation={0.8}
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

          {/* <Block row justifyEnd alignCenter marginHorizontal={12} paddingTop={16}>
          <Pressable >
            <Text style={styles.textForgot} size={14} paddingHorizontal={3}>
              Đăng ký tài khoản?
            </Text>
          </Pressable>
          <NavigationAuth />
        </Block> */}

          <Block marginTop={32} paddingHorizontal={12} marginBottom={1000}>
            <Button
              title="GỞI XÁC NHẬN"
              height={50}
              style={{
                backgroundColor: theme.colors.pink,
                elevation: 2,
                shadowColor: theme.colors.black,
              }}
            />
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default Forgot;
