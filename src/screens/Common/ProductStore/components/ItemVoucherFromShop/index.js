import {IconVoucher} from '@assets/svg/common';
import {Block, Text} from '@components';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import React from 'react';
import {Pressable} from 'react-native';
import styles from './styles';

const ItemVoucherFromShop = ({typeVoucher, timeVoucher, check}) => {
  return (
    <Pressable>
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
        <Block style={styles.IconVoucher}>
          <IconVoucher />
        </Block>
        <Block paddingHorizontal={12}>
          <Text
            marginRight={28}
            lineHeight={20}
            color={theme.colors.black}
            fontType="semibold">
            {typeVoucher}
          </Text>
          <Text lineHeight={18} color={theme.colors.lightGray}>
            {timeVoucher}
          </Text>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemVoucherFromShop;
