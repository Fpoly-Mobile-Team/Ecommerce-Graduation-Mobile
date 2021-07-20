import {images} from '@assets';
import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';

const ItemDetailHistory = ({title, color, size, price, amount}) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate(routes.PRODUCT_DETAILS)}>
      <Block
        row
        marginBottom={20}
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
    </Pressable>
  );
};

export default ItemDetailHistory;
