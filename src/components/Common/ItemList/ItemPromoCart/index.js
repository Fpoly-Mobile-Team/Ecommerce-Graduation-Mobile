import {images} from '@assets';
import {Block, Button, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';

const ItemPromoCart = ({title, cod, time, onPress}) => {
  return (
    <Pressable onPress={onPress}>
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
          <Text size={16} fontType="bold" paddingVertical={3}>
            {title}
          </Text>
          <Text>{cod}</Text>
        </Block>
        <Block paddingTop={20} alignEnd>
          <Text color={theme.colors.lightGray} size={12}>
            {time}
          </Text>
          <Button
            style={styles.btn}
            height={30}
            title="Chọn"
            onPress={onPress}
          />
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemPromoCart;
