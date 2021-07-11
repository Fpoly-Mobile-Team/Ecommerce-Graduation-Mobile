import {images} from '@assets';
import {Block, Button, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const ItemPromoCart = ({title, cod, time}) => {
  return (
    <Block
      row
      alignCenter
      backgroundColor={theme.colors.white}
      radius={10}
      space="between"
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
        <Button style={styles.btn} height={30} title="Chọn" />
      </Block>
    </Block>
  );
};

export default ItemPromoCart;
