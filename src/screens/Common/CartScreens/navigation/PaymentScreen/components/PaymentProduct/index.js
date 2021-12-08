import {Block, Text} from '@components';
import ItemPaymentProduct from '@components/Common/ItemList/ItemPaymentProduct';
import React from 'react';

const PaymentProduct = ({data}) => {
  const indexend = data.length - 1;
  const _renderItem = (item, index) => (
    <ItemPaymentProduct
      key={index}
      isCheck={index === indexend}
      nameProduct={item?.product?.name}
      quantity={item?.quantity}
      price={item.price * (1 - item?.product?.sellOff)}
      image={item?.product?.images[0]}
    />
  );

  return (
    <Block marginTop={17} paddingHorizontal={16}>
      <Text size={16} marginBottom={5} fontType="semibold">
        Đơn hàng sẽ được giao 1 lần
      </Text>
      <Block>{data?.map(_renderItem)}</Block>
    </Block>
  );
};

export default PaymentProduct;
