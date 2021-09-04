import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import React from 'react';
import {Pressable} from 'react-native';

const DeliveryAddress = () => {
  const navigation = useNavigation();
  return (
    <Block marginTop={27} paddingHorizontal={16}>
      <Text size={16} fontType="semibold">
        Địa chỉ giao hàng
      </Text>
      <Block
        row
        shadow
        shadowColor={'#000008'}
        marginTop={17}
        radius={8}
        paddingVertical={18}
        paddingHorizontal={28}
        backgroundColor={theme.colors.white}>
        <Block flex>
          <Block row alignCenter>
            <Text fontType="bold">Tran Dinh Huy </Text>
            <Text>{'|'} 0356706751</Text>
          </Block>
          <Text>191 Phạm Huy Thông</Text>
          <Text>Quận Gò Vấp, Phường 6, TP. Hồ Chí Minh</Text>
        </Block>
        <Pressable onPress={() => navigation.navigate(routes.ADDRESS_SCREEN)}>
          <Text fontType="bold" color={theme.colors.pink}>
            Thay đổi
          </Text>
        </Pressable>
      </Block>
    </Block>
  );
};

export default DeliveryAddress;
