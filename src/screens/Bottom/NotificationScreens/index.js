import {icons} from '@assets';
import {Block, Button, Header, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const NotificationScreens = () => {
  const navigation = useNavigation();

  return (
    <Block flex>
      <Header title="Thông Báo" />
      <Block flex alignCenter justifyCenter>
        <Image source={icons.bell} style={styles.iconbell} />
        <Text marginTop={20}>Vui lòng đăng nhập để nhận thông báo</Text>
        <Button
          title="ĐĂNG NHẬP NGAY"
          style={styles.stylebtn}
          onPress={() => navigation.navigate(routes.PROFILESCREENS)}
        />
      </Block>
    </Block>
  );
};

export default NotificationScreens;
