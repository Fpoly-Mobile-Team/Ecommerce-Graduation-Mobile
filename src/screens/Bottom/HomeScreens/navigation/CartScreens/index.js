import React, {useRef, useState} from 'react';
import {Block, HeaderTitle} from '@components';
import {View, TouchableOpacity, TextInput, Text} from 'react-native';
import {height} from '@utils/responsive';
import {CircleBack} from 'svg/common';
import styles from './styles';
import ListCart from './ListItem';

const CartScreen = () => {
  return (
    <Block flex height={height}>
      <HeaderTitle
        isDefault
        containerStyle={styles.headerContain}
        leftStyle={{
          fontWeight: 'bold',
          paddingHorizontal: 10,
        }}
        middleComponent={
          <Text style={styles.middleComponent}>Giỏ hàng của tôi</Text>
        }
      />

      <View style={{flex: 1, height: '100%', paddingTop: 50}}>
        <ListCart />
      </View>
      <View style={styles.container}>
        <View style={styles.promo}>
          <TextInput
            style={styles.input}
            placeholder="Nhập mã khuyến mãi của bạn..."
          />
          <TouchableOpacity onPress={{}}>
            <CircleBack style={styles.next} />
          </TouchableOpacity>
        </View>
        <View style={styles.amount}>
          <Text style={{fontSize: 18, color: 'gray'}}>Tổng tiền:</Text>
          <Text style={{color: 'black', fontSize: 18}}>124.000 VND</Text>
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.btnOutline}>
            <Text style={styles.textOutline}>Quay lại</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnRounded}>
            <Text style={styles.textBtn}>Thay đổi địa chỉ</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.check}>
          <Text style={styles.textBtn}>THANH TOÁN</Text>
        </TouchableOpacity>
      </View>
    </Block>
  );
};

export default CartScreen;
