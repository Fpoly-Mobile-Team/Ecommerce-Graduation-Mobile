import {Block, Text} from '@components';
import ItemPaymentProduct from '@components/Common/ItemList/ItemPaymentProduct';
import React from 'react';

const PaymentProduct = () => {
  const DATA = [1, 2, 3, 4];
  const indexend = DATA.length - 1;
  const _renderItem = (item, index) => (
    <ItemPaymentProduct key={index} isCheck={index === indexend} />
  );

  return (
    <Block marginTop={17} paddingHorizontal={16}>
      <Text size={16} marginBottom={5} fontType="semibold">
        Đơn hàng sẽ được giao 1 lần
      </Text>
      <Block>{DATA.map(_renderItem)}</Block>
    </Block>
  );
};

export default PaymentProduct;
