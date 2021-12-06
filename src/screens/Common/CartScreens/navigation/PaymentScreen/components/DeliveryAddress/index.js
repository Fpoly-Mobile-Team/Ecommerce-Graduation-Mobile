import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import React from 'react';
import {Pressable} from 'react-native';
import {useSelector} from 'react-redux';

const DeliveryAddress = () => {
  const navigation = useNavigation();
  const userInfo = useSelector(state => state.userInfo?.data);

  const province =
    userInfo?.address?.filter(v => v.isDefault === true)[0]?.province +
    ', ' +
    userInfo?.address?.filter(v => v.isDefault === true)[0]?.district +
    ', ' +
    userInfo?.address?.filter(v => v.isDefault === true)[0]?.ward;

  return (
    <Block marginTop={27} paddingHorizontal={16}>
      <Text size={16} fontType="semibold">
        Địa chỉ giao hàng
      </Text>
      {userInfo?.address && userInfo?.address?.length > 0 ? (
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
              <Text fontType="bold">
                {
                  userInfo?.address?.filter(v => v.isDefault === true)[0]
                    ?.full_name
                }{' '}
              </Text>
              <Text>
                {'|'}{' '}
                {userInfo?.address?.filter(v => v.isDefault === true)[0]?.phone}
              </Text>
            </Block>
            <Text>
              {userInfo?.address?.filter(v => v.isDefault === true)[0]?.street}
            </Text>
            <Text>{province}</Text>
          </Block>
          <Pressable onPress={() => navigation.navigate(routes.ADDRESS_SCREEN)}>
            <Text fontType="bold" color={theme.colors.pink}>
              Thay đổi
            </Text>
          </Pressable>
        </Block>
      ) : (
        <Block marginTop={17} row alignCenter space="between">
          <Text>Bạn chưa có địa chỉ</Text>
          <Pressable onPress={() => navigation.navigate(routes.ADDRESS_SCREEN)}>
            <Text fontType="bold" color={theme.colors.pink}>
              Thêm địa chỉ
            </Text>
          </Pressable>
        </Block>
      )}
    </Block>
  );
};

export default DeliveryAddress;
