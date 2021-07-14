import {Block, Text, Button} from '@components';
import {theme} from '@theme';
import {height} from '@utils/responsive';
import React, {useRef, useState} from 'react';
import styles from './styles';

const Item = ({
  name,
  date,
  shop,
  quantity,
  price,
  status,
  checkColor,
  checkBackground,
}) => {
  return (
    <Block
      elevation={7}
      shadow={20}
      radius={7}
      marginVertical={15}
      paddingVertical={10}
      paddingHorizontal={15}
      backgroundColor={theme.colors.white}
      column>
      <Block row space="between" paddingVertical={10}>
        <Text style={styles.name}>{name}</Text>
        <Text color={theme.colors.lightGray}>{date}</Text>
      </Block>
      <Text style={styles.containText}>
        <Text style={styles.label}>Cửa hàng: </Text>
        {shop}
      </Text>
      <Block row space="between" paddingVertical={10}>
        <Text style={styles.containText}>
          <Text style={styles.label}>Số lượng: </Text>
          {quantity}
        </Text>
        <Text style={styles.containText}>
          <Text style={styles.label}>Thành tiền: </Text>
          {price} VND
        </Text>
      </Block>
      <Block row space="between" alignCenter>
        <Button
          height={35}
          title="Details"
          titleStyle={{color: theme.colors.black}}
          style={styles.btnOutline}
        />
        <Text color={checkColor ? theme.colors.red : theme.colors.greenStatus}>
          {status}
        </Text>
      </Block>
    </Block>
  );
};

export default Item;
