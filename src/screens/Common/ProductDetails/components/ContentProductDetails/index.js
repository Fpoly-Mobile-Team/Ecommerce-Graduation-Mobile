import {icons} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import {Currency} from '@utils/helper';
import {getSize, width} from '@utils/responsive';
import React, {useEffect} from 'react';
import {Image, Pressable} from 'react-native';
import {Rating} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import actions from '@redux/actions';
import {navigate} from '@navigation/RootNavigation';
import {routes} from '@navigation/routes';

const ContentProductDetails = ({
  idProduct,
  nameProduct,
  price,
  sellOff,
  numberOfReviews,
  productSold,
  onPressViewProductReview,
}) => {
  const dispatch = useDispatch();

  const isCheck = useSelector(state => state.checkProductFavorite?.data);
  const user = useSelector(state => state.tokenUser?.data);
  const productReview = useSelector(state => state.productReview?.data);
  const checkData = productReview?.length;
  let sum = 0;

  for (let index = 0; index < checkData; index++) {
    const getRating = productReview[index]?.rating;
    sum += getRating;
  }

  const totalRating = sum / checkData;

  useEffect(() => {
    if (user) {
      dispatch({
        type: actions.CHECK_PRODUCT_FAVORITE,
        user,
        idProduct: idProduct,
      });
    }
  }, [dispatch, idProduct, user]);

  const _onPress = () => {
    if (user) {
      dispatch({
        type: actions.ADD_PRODUCT_FAVORITE,
        user,
        body: {
          idProduct: idProduct,
        },
      });
    } else {
      navigate(routes.AUTHFORSCREEN);
    }
  };
  const salePrice = price * sellOff;

  return (
    <Block paddingVertical={10}>
      <Block paddingHorizontal={12}>
        <Block row alignCenter marginVertical={5}>
          <Block>
            <Block row alignCenter space="between" width={width - 24}>
              <Text size={24} color={theme.colors.red} fontType="bold">
                {Currency(salePrice === 0 ? price : salePrice)}
              </Text>
              <Pressable onPress={_onPress}>
                <Image
                  source={isCheck ? icons.favoritefill : icons.favorite}
                  style={styles.iconfav(isCheck)}
                  resizeMode="contain"
                />
              </Pressable>
            </Block>
            {sellOff !== 0 && (
              <Block row alignCenter>
                <Text
                  fontType="light"
                  marginVertical={5}
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
                    size={12}
                    color={theme.colors.white}
                    fontType="semibold">
                    {sellOff * 100}%
                  </Text>
                </Block>
              </Block>
            )}
          </Block>
        </Block>
        <Text size={16} fontType="bold">
          {nameProduct}
        </Text>
        <Block
          row
          alignCenter
          marginVertical={8}
          width={width - 44}
          space="between">
          <Block row alignCenter>
            <Rating
              imageSize={getSize.s(15)}
              readonly
              startingValue={totalRating >= 1 && totalRating}
            />
            <Pressable onPress={onPressViewProductReview}>
              <Text marginLeft={getSize.m(5)} color={theme.colors.placeholder}>
                (Xem {numberOfReviews} đánh giá)
              </Text>
            </Pressable>
          </Block>
          <Text fontType="light" color={theme.colors.placeholder}>
            Đã bán {productSold}
          </Text>
        </Block>
      </Block>
      <Block height={10} marginTop={10} backgroundColor={theme.colors.smoke} />
    </Block>
  );
};

export default ContentProductDetails;
