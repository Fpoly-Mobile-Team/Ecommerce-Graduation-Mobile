import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';

const HeaderComponent = () => {
  return (
    <Block>
      <Block row space="between" paddingTop={20}>
        <Text fontType={'bold'} size={17}>
          Order №1947034
        </Text>
        <Text color={theme.colors.lightGray}>05-12-2019</Text>
      </Block>
      <Block row space="between" paddingVertical={12}>
        <Text fontType={'bold'} size={15}>
          <Text size={15} color={theme.colors.lightGray}>
            Tên cửa hàng:{'  '}
          </Text>
          Cửa hàng thời trang 11
        </Text>
        <Text color={theme.colors.greenStatus}>Đã giao</Text>
      </Block>
      <Text fontType="bold" size={15}>
        3 Sản Phẩm
      </Text>
    </Block>
  );
};

export default HeaderComponent;
