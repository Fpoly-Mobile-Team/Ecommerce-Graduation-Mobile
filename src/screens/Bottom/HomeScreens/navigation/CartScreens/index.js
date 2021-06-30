import React, {useRef, useState} from 'react';
import {Block, Header, Button, Text} from '@components';
import {TextInput, Pressable, ScrollView} from 'react-native';
import {height, width} from '@utils/responsive';
import {CircleBack} from 'svg/common';
import styles from './styles';
import ListCart from './ListItem';
import {theme} from '@theme';

const CartScreen = () => {
  return (
    <Block flex height={height}>
      <Header checkBackground canGoBack title="Giỏ hàng của tôi" />

      <Block flex paddingTop={20} width={width}>
        <ListCart />
      </Block>

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
            checkBackground
            titleStyle={{color: 'black'}}
            style={styles.btnOutline}
            height={40}
          />
          <Button
            height={40}
            title="Thay đổi địa chỉ"
            style={styles.btnRounded}
          />
        </Block>
        <Button title="THANH TOÁN" height={50} style={styles.btnCheck} />
      </Block>
    </Block>
  );
};

export default CartScreen;
