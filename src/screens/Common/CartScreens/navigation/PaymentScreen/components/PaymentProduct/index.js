import {Block, Text} from '@components';
import ItemPaymentProduct from '@components/Common/ItemList/ItemPaymentProduct';
import {width} from '@utils/responsive';
import React from 'react';
import {ScrollView} from 'react-native';

const PaymentProduct = () => {
  const DATA = [1, 2, 3, 4];
  const indexend = DATA.length - 1;
  const _renderItem = (item, index) => (
    <ItemPaymentProduct key={index} isCheck={index === indexend} />
  );

  const heightScroll = DATA.length < 2 ? 0 : width / 1.5;

  return (
    <Block marginTop={17} paddingHorizontal={16}>
      <Text size={16} marginBottom={5} fontType="semibold">
        Đơn hàng sẽ được giao 1 lần
      </Text>
      <Block height={heightScroll}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {DATA.map(_renderItem)}
        </ScrollView>
      </Block>
    </Block>
  );
};

export default PaymentProduct;
