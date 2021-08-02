import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Pressable} from 'react-native';

const PaymentMethod = () => {
  return (
    <Block marginTop={27} paddingHorizontal={16}>
      <Text size={16} fontType="semibold">
        Phương thức thanh toán
      </Text>
      <Pressable>
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
          <Text>Thanh toán khi nhận hàng</Text>
          <Text fontType="bold" color={theme.colors.pink}>
            Thay đổi
          </Text>
        </Block>
      </Pressable>
      <Block marginTop={20}>
        <Block row alignCenter space="between" marginBottom={10}>
          <Text color={theme.colors.placeholder}>Tổng tiền hàng</Text>
          <Text size={16} fontType="semibold">
            99.000{'₫'}
          </Text>
        </Block>
        <Block row alignCenter space="between" marginBottom={10}>
          <Text color={theme.colors.placeholder}>Phí vận chuyển</Text>
          <Text size={16} fontType="semibold">
            32.000{'₫'}
          </Text>
        </Block>
        <Block row alignCenter space="between" marginBottom={10}>
          <Text color={theme.colors.placeholder}>Tổng voucher</Text>
          <Text size={16} fontType="semibold">
            35.000{'₫'}
          </Text>
        </Block>
        <Block row alignCenter space="between" marginBottom={10}>
          <Text fontType="bold">Tổng thanh toán</Text>
          <Text size={18} fontType="semibold" color={theme.colors.pink}>
            199.000{'₫'}
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

export default PaymentMethod;
