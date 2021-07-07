import {CircleBack} from '@assets/svg/common';
import {Block, Button, Header, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Pressable, TextInput} from 'react-native';
import ListCart from './components/ListItem';
import styles from './styles';

const CartScreen = () => {
  return (
    <Block flex>
      <Header checkBackground canGoBack title="Giỏ hàng của tôi" />
      <ListCart />
      <Block paddingBottom={20}>
        <Block style={styles.promo}>
          <TextInput
            style={styles.input}
            placeholder="Nhập mã khuyến mãi của bạn..."
          />
          <Pressable onPress={{}}>
            <CircleBack style={styles.next} />
          </Pressable>
        </Block>
        <Block style={styles.amount}>
          <Text color={theme.colors.gray} size={16}>
            Tổng tiền:
          </Text>
          <Text color={theme.colors.black} size={18} fontType="semibold">
            124.000 VND
          </Text>
        </Block>
        <Block style={styles.buttonGroup}>
          <Button
            title="Quay lại"
            titleStyle={{color: theme.colors.black}}
            style={styles.btnOutline}
            height={40}
          />
          <Button
            height={40}
            title="Thay đổi địa chỉ"
            style={styles.btnRounded}
          />
        </Block>
        <Block paddingHorizontal={12}>
          <Button title="THANH TOÁN" height={50} style={styles.btnCheck} />
        </Block>
      </Block>
    </Block>
  );
};

export default CartScreen;
