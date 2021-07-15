import {images} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import React, {useState} from 'react';
import {Image} from 'react-native';
import styles from './styles';

const Item = ({title, color, size, price, amount}) => {
  return (
    <Block
      row
      flex
      marginTop={20}
      backgroundColor={theme.colors.white}
      radius={10}>
      <Image source={images.thumnail} style={styles.img} />
      <Block flex padding={10}>
        <Block row space="between" paddingTop={5}>
          <Text
            size={20}
            fontType="semibold"
            numberOfLines={2}
            color={theme.colors.black}>
            {title}
          </Text>
        </Block>
        <Block marginTop={5} marginBottom={20} flexDirection="row">
          <Block paddingRight={15}>
            <Text size={12} color="gray">
              Color:{' '}
              <Text size={12} fontType="bold">
                {color}
              </Text>
            </Text>
          </Block>
          <Text size={12} color="gray">
            Size:{' '}
            <Text size={12} fontType="bold">
              {size}
            </Text>
          </Text>
        </Block>
        <Block row space="between">
          <Block row>
            <Text size={12} fontType={'bold'}>
              <Text size={12} color={theme.colors.lightGray}>
                Số lượng:{'  '}
              </Text>
              {amount}
            </Text>
          </Block>
          <Text size={15} color={theme.colors.black} fontType="semibold">
            {price} VND
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

export default Item;
