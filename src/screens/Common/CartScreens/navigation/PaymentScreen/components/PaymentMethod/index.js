import {Block, Text} from '@components';
import {theme} from '@theme';
import {Currency} from '@utils/helper';
import React from 'react';
import {Pressable} from 'react-native';

const PaymentMethod = ({priceProduct, priceVoucher, priceShip}) => {
  const total = priceVoucher
    ? priceProduct + priceShip - priceVoucher
    : priceProduct + priceShip;
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
        </Block>
      </Pressable>
      <Block marginTop={20}>
        <Block row alignCenter space="between" marginBottom={10}>
          <Text color={theme.colors.placeholder}>Tổng tiền hàng</Text>
          <Text size={16} fontType="semibold">
            {Currency(priceProduct)}
          </Text>
        </Block>
        <Block row alignCenter space="between" marginBottom={10}>
          <Text color={theme.colors.placeholder}>Phí vận chuyển</Text>
          <Text size={16} fontType="semibold">
            {Currency(priceShip)}
          </Text>
        </Block>
        {priceVoucher ? (
          <Block row alignCenter space="between" marginBottom={10}>
            <Text color={theme.colors.placeholder}>Tổng voucher</Text>
            <Text size={16} fontType="semibold">
              {Currency(priceVoucher)}
            </Text>
          </Block>
        ) : null}

        <Block row alignCenter space="between" marginBottom={10}>
          <Text fontType="bold">Tổng thanh toán</Text>
          <Text size={18} fontType="semibold" color={theme.colors.pink}>
            {Currency(total)}
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

export default PaymentMethod;
