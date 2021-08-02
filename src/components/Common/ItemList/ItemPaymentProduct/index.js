import {Block, Text} from '@components';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';

const ItemPaymentProduct = ({isCheck}) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate(routes.PRODUCT_DETAILS)}>
      <Block
        row
        flex
        radius={8}
        borderColor={theme.colors.lightGray}
        borderWidth={0.5}
        paddingVertical={10}
        paddingHorizontal={12}
        marginTop={15}
        marginBottom={isCheck ? 15 : 0}
        backgroundColor={theme.colors.white}>
        <Image
          source={{
            uri: 'https://cf.shopee.vn/file/311918633451d5d5e9da52ecb7aef296',
          }}
          style={{width: getSize.s(70), height: getSize.s(70)}}
          resizeMode="contain"
        />
        <Block flex marginLeft={10}>
          <Text numberOfLines={2} size={16} color={theme.colors.placeholder}>
            Card đồ họa Gigabyte GTX 1050 2gb bảo hành 3 tháng - Card đồ họa
            Giga GTX 1050
          </Text>
          <Block row alignCenter marginTop={5} space="between">
            <Text fontType="semibold">SL: x1</Text>
            <Text size={15} fontType="semibold">
              3.000.000{'₫'}
            </Text>
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemPaymentProduct;
