import {Block, Text} from '@components';
import {DotsThreeVertical, MinusCircle, PlusCircle} from '@assets/svg/common';
import {images} from '@assets';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {theme} from '@theme';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';

const ItemProductCart = ({title, color, size, amount, price}) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate(routes.PRODUCT_DETAILS)}>
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
            <Pressable>
              <DotsThreeVertical />
            </Pressable>
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
          <Block alignCenter paddingRight={10} row space="between">
            <Block row alignCenter>
              <Pressable>
                <Block
                  radius={40}
                  height={40}
                  width={40}
                  shadow
                  justifyCenter
                  alignCenter>
                  <MinusCircle />
                </Block>
              </Pressable>
              <Text size={16} color={theme.colors.black} paddingHorizontal={13}>
                {amount}
              </Text>
              <Pressable>
                <Block
                  radius={40}
                  height={40}
                  width={40}
                  shadow
                  justifyCenter
                  alignCenter>
                  <PlusCircle />
                </Block>
              </Pressable>
            </Block>
            <Text size={15} color={theme.colors.black} fontType="semibold">
              {price} {''}VND
            </Text>
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemProductCart;
