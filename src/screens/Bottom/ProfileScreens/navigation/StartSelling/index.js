import {Block, Button, Header, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import {height} from '@utils/responsive';
import React from 'react';
import {Image, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';

const StartSelling = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.tokenUser?.data);
  const config = useSelector(state => state.config?.data);
  const coloring = `${config?.backgroundcolor}75`;
  const photos = 'https://i.imgur.com/H8UN4zR.png';

  const _renderCenter = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block
          marginBottom={24}
          backgroundColor={coloring}
          height={height / (4.4 / 2)}
          alignCenter
          justifyCenter>
          <Block
            width={220}
            height={220}
            radius={220}
            alignCenter
            justifyCenter>
            <Image source={{uri: photos}} style={styles.photos} />
          </Block>
        </Block>
        <Text
          size={15}
          fontType="medium"
          center
          marginHorizontal={24}
          lineHeight={20}>
          Để đăng ký bán hàng trên Ants, bạn cần cung cấp một số thông tin cơ
          bản
        </Text>
      </ScrollView>
    );
  };
  return (
    <Block flex backgroundColor={theme.colors.background}>
      <Header checkBackground canGoBack title="Chào mừng đến với Ants" />
      <_renderCenter />
      <Button
        title="TIẾP TỤC"
        height={45}
        style={styles.button}
        shadow
        elevation={6}
        onPress={() => navigation.navigate(routes.SALE_INFORMATION_SETTINGS)}
      />
    </Block>
  );
};

export default StartSelling;
