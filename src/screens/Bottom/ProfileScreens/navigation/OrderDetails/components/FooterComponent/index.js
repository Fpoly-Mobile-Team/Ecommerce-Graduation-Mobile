import {Block, Text} from '@components';
import {theme} from '@theme';
import {Currency} from '@utils/helper';
import React from 'react';
const FooterComponent = ({data}) => {
  let address =
    data?.deliveryAddress.street +
    ',' +
    data?.deliveryAddress.ward +
    ',' +
    data?.deliveryAddress.district +
    ',' +
    data?.deliveryAddress.province;
  return (
    <Block paddingHorizontal={15}>
      <Text paddingVertical={15} size={16} fontType={'bold'}>
        Thông tin đặt hàng:
      </Text>
      <Block row space="between" marginBottom={10}>
        <Text color={theme.colors.lightGray}>Địa chỉ giao hàng:{'  '}</Text>
        <Block width="60%">
          <Text fontType={'bold'}>{address}</Text>
        </Block>
      </Block>
      <Block alignCenter row space="between" marginBottom={10}>
        <Text color={theme.colors.lightGray}>Thanh toán:{'  '}</Text>
        <Block width="60%" row>
          <Text fontType={'bold'}>Tiền mặt</Text>
        </Block>
      </Block>
      <Block alignCenter row space="between" marginBottom={10}>
        <Text color={theme.colors.lightGray}>Vận chuyển:{'  '}</Text>
        <Block width="60%">
          <Text fontType={'bold'}>Giao hàng {data.deliveryMethod}</Text>
        </Block>
      </Block>
      {data.orderDiscount ? (
        <Block alignCenter row space="between" marginBottom={10}>
          <Text color={theme.colors.lightGray}>Giảm giá:{'  '}</Text>
          <Block width="60%">
            <Text fontType={'bold'}>
              {' '}
              {data.orderDiscountType === 'VNĐ'
                ? Currency(data.orderDiscount)
                : data.orderDiscount * 100 + '% '}{' '}
              voucher
            </Text>
          </Block>
        </Block>
      ) : null}

      <Block alignCenter row space="between" marginBottom={10}>
        <Text color={theme.colors.lightGray}>Tổng cộng:{'  '}</Text>
        <Block width="60%">
          <Text fontType={'bold'}>{Currency(data.totalPrice)}</Text>
        </Block>
      </Block>
    </Block>
  );
};

export default FooterComponent;
