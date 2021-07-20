import {Block, Button, Header} from '@components';
import {theme} from '@theme';
import React from 'react';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListProductDetails from './components/ListProductDetails';
import styles from './styles';

const OrderDetails = (checkTitle, onPress) => {
  return (
    <Block flex>
      <Header checkBackground canGoBack title="Hóa đơn chi tiết" />
      <Block paddingHorizontal={20}>
        <HeaderComponent />
      </Block>
      <Block flex>
        <ListProductDetails />
      </Block>
      <Block flex>
        <FooterComponent />
      </Block>
      {/* Nếu trạng thái đã giao hoặc hủy thì button title='Đặt lại' và đang
        giao thì hông có button */}
      <Button
        title="Đặt lại"
        titleStyle={{color: theme.colors.black}}
        style={styles.btnStyle}
        height={40}
      />
    </Block>
  );
};

export default OrderDetails;
