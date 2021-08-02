import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Pressable} from 'react-native';

const VoucherShop = ({onPress}) => {
  return (
    <Block marginTop={10} paddingHorizontal={16}>
      <Text size={16} fontType="semibold">
        Voucher của Shop
      </Text>
      <Pressable onPress={onPress}>
        <Block
          row
          shadow
          shadowColor={'#000008'}
          marginTop={17}
          radius={8}
          paddingVertical={18}
          paddingHorizontal={28}
          backgroundColor={theme.colors.white}
          space="between">
          <Text>Áp dụng voucher</Text>
          <Text fontType="bold" color={theme.colors.pink}>
            Thay đổi
          </Text>
        </Block>
      </Pressable>
    </Block>
  );
};

export default VoucherShop;
