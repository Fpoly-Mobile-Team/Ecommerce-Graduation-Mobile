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

const ItemProductCateSub = React.memo(
  ({
    style,
    images,
    nameProduct,
    left,
    price,
    productSold,
    sellOff,
    _id,
    review,
  }) => {
    const navigation = useNavigation();
    const promotionalPrice = price * sellOff;
    let sum = 0;

    for (let index = 0; index < review?.length; index++) {
      const getRating = review[index]?.rating;
      sum += getRating;
    }

    const totalRating = sum / review?.length;
    const parseRating = Number(totalRating).toFixed(1) || 0;

    return (
      <Pressable
        onPress={() => navigation.navigate(routes.PRODUCT_DETAILS, {_id})}>
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
              numberOfLines={2}
              marginBottom={5}
              size={16}
              fontType="bold">
              {nameProduct}
            </Text>
            {sellOff !== 0 && (
              <Text
                color={theme.colors.red}
                marginBottom={5}
                size={15}
                fontType="medium">
                {Currency(promotionalPrice)}
              </Text>
            )}

            <Block row alignCenter marginBottom={5}>
              {sellOff === 0 ? (
                <Text color={theme.colors.red} size={15} fontType="medium">
                  {Currency(price)}
                </Text>
              ) : (
                <>
                  <Text
                    fontType="light"
                    size={12}
                    color={theme.colors.lightGray}
                    style={styles.txtunderprice}>
                    {Currency(price)}
                  </Text>
                  <Block
                    alignCenter
                    justifyCenter
                    radius={2}
                    paddingHorizontal={2}
                    marginLeft={10}
                    backgroundColor={theme.colors.sell}>
                    <Text
                      center
                      color={theme.colors.white}
                      size={12}
                      fontType="semibold">
                      {sellOff * 100}%
                    </Text>
                  </Block>
                </>
              )}
            </Block>

            <Block row alignCenter>
              <Rating
                imageSize={getSize.s(10)}
                readonly
                startingValue={parseRating === 'NaN' ? 0 : parseRating}
              />
              <Text size={10} marginLeft={getSize.m(5)}>
                ({review?.length})
              </Text>
            </Block>
            <Block paddingTop={5}>
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

export default ItemProductCateSub;
