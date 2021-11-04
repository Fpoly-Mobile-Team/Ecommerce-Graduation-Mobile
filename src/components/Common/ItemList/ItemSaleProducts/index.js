import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import {Currency} from '@utils/helper';
import {getSize, width} from '@utils/responsive';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {Rating} from 'react-native-elements';
import styles from './styles';

const ItemSaleProducts = React.memo(
  ({style, images, nameProduct, left, price, productSold, sellOff}) => {
    const navigation = useNavigation();
    const promotionalPrice = price * sellOff;

    return (
      <Pressable onPress={() => navigation.navigate(routes.PRODUCT_DETAILS)}>
        <Block
          radius={5}
          shadow
          width={(width - 36) / 2.5}
          marginBottom={10}
          paddingVertical={10}
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
                {sellOff !== 0 ? `Giảm ${sellOff * 100}%` : 'Hàng mới'}
              </Text>
            </Block>
          </Block>
          <Image
            source={{
              uri: images,
            }}
            style={styles.imgbox(sellOff === 0)}
            resizeMode="contain"
          />
          <Block paddingHorizontal={3}>
            <Text
              flex
              numberOfLines={1}
              marginBottom={5}
              size={15}
              fontType="bold">
              {nameProduct}
            </Text>

            <Text
              color={theme.colors.red}
              marginBottom={5}
              size={15}
              fontType="medium">
              {Currency(promotionalPrice)}
            </Text>

            <Block row alignCenter space="between" alignEnd>
              <Block row alignCenter>
                <Rating imageSize={getSize.s(10)} readonly startingValue={4} />
                <Text size={10} marginLeft={getSize.m(5)}>
                  (25)
                </Text>
              </Block>
              <Text size={9} color={theme.colors.placeholder} fontType="light">
                Đã bán {productSold}
              </Text>
            </Block>
          </Block>
        </Block>
      </Pressable>
    );
  },
);

export default ItemSaleProducts;
