import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {Rating} from 'react-native-elements';
import styles from './styles';

const ItemProduct = React.memo(
  ({style, image, nameProduct, fashsale, left}) => {
    const navigation = useNavigation();
    return (
      <Pressable onPress={() => navigation.navigate(routes.PRODUCT_DETAILS)}>
        <Block
          radius={5}
          shadow
          width={(width - 36) / 2.5}
          marginBottom={10}
          paddingVertical={10}
          margin={6}
          style={style}
          backgroundColor="white">
          <Block
            absolute
            left={-5}
            top={6}
            backgroundColor="#f25220"
            style={styles.discount}>
            <Block
              absolute
              left={left}
              bottom={-5}
              style={styles.discountbox}
            />
            <Block paddingHorizontal={6} paddingVertical={2}>
              <Text size={12} color={theme.colors.white} fontType="semibold">
                {fashsale ? 'Giảm -35%' : 'Hàng mới'}
              </Text>
            </Block>
          </Block>
          <Image
            source={{
              uri: image,
            }}
            style={styles.imgbox}
            resizeMode="contain"
          />
          <Block paddingHorizontal={3}>
            <Text numberOfLines={2} marginBottom={5} fontType="semibold">
              {nameProduct}
            </Text>
            <Text color={theme.colors.red} marginBottom={5} fontType="bold">
              3.593.100 ₫
            </Text>
            {fashsale ? (
              <Block />
            ) : (
              <Block row alignCenter marginBottom={5}>
                <Text
                  size={12}
                  color={theme.colors.lightGray}
                  style={styles.txtunderprice}>
                  4.500.000 đ
                </Text>
                <Block
                  alignCenter
                  justifyCenter
                  radius={2}
                  paddingHorizontal={2}
                  marginLeft={10}
                  backgroundColor={theme.colors.pink}>
                  <Text
                    center
                    size={12}
                    color={theme.colors.white}
                    fontType="semibold">
                    -35%
                  </Text>
                </Block>
              </Block>
            )}

            <Block row alignCenter space="between">
              <Block row alignCenter>
                <Rating imageSize={getSize.s(10)} readonly startingValue={4} />
                <Text size={10} marginLeft={getSize.m(5)}>
                  (25)
                </Text>
              </Block>
              <Text size={9} color={theme.colors.placeholder}>
                Đã bán 1,3k
              </Text>
            </Block>
          </Block>
        </Block>
      </Pressable>
    );
  },
);

export default ItemProduct;
