import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Pressable} from 'react-native';

const ShippingMethod = () => {
  return (
    <Block marginTop={27} paddingHorizontal={16}>
      <Text size={16} fontType="semibold">
        Phương thức vận chuyển
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
          backgroundColor={theme.colors.white}>
          <Block flex>
            <Block row alignCenter marginBottom={5} space="between">
              <Text>Nhanh</Text>
              <Text marginRight={10}>32.000 VNĐ</Text>
            </Block>
            <Text>Nhận hàng vào 5 Th08 - 31 Th08</Text>
          </Block>

          <Text fontType="bold" color={theme.colors.pink}>
            Thay đổi
          </Text>
        </Block>
      </Pressable>
    </Block>
  );
};

export default ShippingMethod;
