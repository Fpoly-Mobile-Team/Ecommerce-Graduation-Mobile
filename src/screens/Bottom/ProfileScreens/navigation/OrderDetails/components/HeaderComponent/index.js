import {Block, Text} from '@components';
import {theme} from '@theme';
import moment from 'moment';
import React from 'react';

const HeaderComponent = ({_id, purcharseDate, shop, status, quantity}) => {
  return (
    <Block>
      <Block alignCenter row space="between" paddingTop={20}>
        <Text fontType={'bold'} size={16}>
          Order № {_id}
        </Text>
        <Text size={13} color={theme.colors.lightGray}>
          {moment(purcharseDate).format('DD/MM/YYYY')}
        </Text>
      </Block>
      <Block alignCenter row space="between" marginTop={12} marginBottom={16}>
        <Text fontType={'semibold'} size={14}>
          <Text size={14} color={theme.colors.lightGray}>
            Tên cửa hàng:{'  '}
          </Text>
          {shop}
        </Text>
        <Text
          fontType="semibold"
          color={
            status === 'Bị hủy'
              ? theme.colors.red
              : status === 'Chờ nhận đơn'
              ? theme.colors.primaryColor
              : status === 'Đang vận chuyển'
              ? theme.colors.blue
              : theme.colors.greenStatus
          }>
          {status}
        </Text>
      </Block>
      <Text fontType="bold" size={14}>
        {quantity < 10 ? '0' + quantity : quantity} Sản Phẩm
      </Text>
    </Block>
  );
};

export default HeaderComponent;
