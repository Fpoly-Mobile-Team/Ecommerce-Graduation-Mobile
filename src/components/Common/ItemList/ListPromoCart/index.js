import {Block} from '@components';
import React, {useState} from 'react';
import {Image} from 'react-native';
import {Button, Text} from '@components';
import {theme} from '@theme';
import styles from './styles';
import {images} from '@assets';

const ItemPromoCart = ({title, cod, time}) => {
  return (
    <Block
      row
      alignCenter
      backgroundColor={theme.colors.white}
      radius={10}
      justifyBetween
      paddingRight={10}
      marginVertical={7}>
      <Image style={styles.img} source={images.sale} />

      <Block>
        <Text size={20} fontType="bold" paddingVertical={3}>
          {title}
        </Text>
        <Text size={15}>{cod}</Text>
      </Block>
      <Block paddingTop={20} alignEnd>
        <Text color={theme.colors.lightGray}>{time}</Text>
        <Button style={{width: 100}} height={30} title="Chọn" />
      </Block>
    </Block>
  );
};

export default ItemPromoCart;
