import {Block, Button, Header} from '@components';
import {theme} from '@theme';
import React, {useRef} from 'react';
import {Pressable} from 'react-native';
import ListProductDetails from './components/ListProductDetails';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
const OrderDetails = (checkTitle, onPress) => {
  return (
    <Block flex>
      <Header checkBackground canGoBack title="Hóa đơn chi tiết" />
      <Block marginHorizontal={20} paddingBottom={0}>
        <HeaderComponent />
      </Block>
      <Block flex>
        <ListProductDetails />
      </Block>
      <Block flex>
        <FooterComponent />
      </Block>
      <Pressable>
        {/* Nếu trạng thái đã giao hoặc hủy thì button title='Đặt lại' và đang
        giao thì hông có button */}
        <Button
          title="Đặt lại"
          titleStyle={{color: theme.colors.black}}
          style={{
            borderColor: theme.colors.black,
            borderWidth: 1,
            marginHorizontal: 20,
            marginVertical: 20,
          }}
          height={40}
        />
      </Pressable>
    </Block>
  );
};

export default OrderDetails;
