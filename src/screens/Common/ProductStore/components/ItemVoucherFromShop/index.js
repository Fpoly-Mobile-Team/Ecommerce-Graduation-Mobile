import {IconVoucher} from '@assets/svg/common';
import {Block, Text} from '@components';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import React from 'react';
import {Pressable} from 'react-native';
import styles from './styles';

const ItemVoucherFromShop = ({typeVoucher, timeVoucher, check}) => {
  return (
    <Block
      flex
      row
      marginRight={12}
      alignCenter
      width={width / 1.5}
      radius={8}
      borderColor={'#E9EAEB'}
      borderWidth={1}
      padding={8}
      marginBottom={12}>
      <Pressable style={styles.IconVoucher}>
        <IconVoucher />
      </Pressable>
      <Block paddingHorizontal={12}>
        <Text
          marginRight={28}
          lineHeight={20}
          color={theme.colors.black}
          fontType="semibold">
          {typeVoucher}
        </Text>
        <Text lineHeight={18} color={'#8B9399'}>
          {timeVoucher}
        </Text>
      </Block>
    </Block>
  );
};

export default ItemVoucherFromShop;
