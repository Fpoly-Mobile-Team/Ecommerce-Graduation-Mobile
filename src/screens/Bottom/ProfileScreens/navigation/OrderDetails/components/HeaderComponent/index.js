import {Block, Text} from '@components';
import {theme} from '@theme';
import moment from 'moment';
import React from 'react';

const HeaderComponent = ({_id, purcharseDate, shop, status, quantity}) => {
  return (
    <Block>
      <Block row space="between" paddingTop={20}>
        <Text fontType={'bold'} size={17}>
          #{_id}
        </Text>
        <Text color={theme.colors.lightGray}>
          {moment(purcharseDate).format('DD/MM/YYYY')}
        </Text>
      </Block>
      <Block row space="between" paddingVertical={12}>
        <Text fontType={'bold'} size={15}>
          <Text size={15} color={theme.colors.lightGray}>
            Tên cửa hàng:{'  '}
          </Text>
          {shop}
        </Text>
        <Text
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
      <Text fontType="bold" size={15}>
        {quantity} Sản Phẩm
      </Text>
    </Block>
  );
};

export default HeaderComponent;
