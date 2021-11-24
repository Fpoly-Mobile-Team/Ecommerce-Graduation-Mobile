import {Block, Text} from '@components';
import ItemFeedBack from '@components/Common/ItemList/ItemFeedBack';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React, {useEffect} from 'react';
import {Pressable} from 'react-native';
import {Rating} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@redux/actions';
import moment from 'moment';

const ProductReviews = ({onPress, _id}) => {
  const dispatch = useDispatch();
  const productReview = useSelector(state => state.productReview?.data);
  const user = useSelector(state => state.tokenUser?.data);
  const checkData = productReview?.length;
  let sum = 0;

  for (let index = 0; index < checkData; index++) {
    const getRating = productReview[index]?.rating;
    sum += getRating;
  }

  const totalRating = sum / checkData;
  const parseRating = totalRating.toFixed(1);

  const noPhoto =
  'https://t-f20-zpg.zdn.vn/480/31373314168375588/1fd9c43dd0381b664229.jpg';

  const _renderItem = (item, index) => (
    <ItemFeedBack
      key={index}
      name={!user ? '*****' + item?.name?.slice(6) : item?.name}
      avatar={user ? item.avatar : noPhoto}
      star={item.rating}
      time={moment(item.reviewDate).format('DD/MM/YYYY, hh:mm')}
      image={item.image}
      description={item.review}
    />
  );

  useEffect(() => {
    dispatch({
      type: actions.GET_PRODUCT_REVIEW,
      productId: _id,
    });
  }, [dispatch, _id]);

  return (
    <Block marginTop={10} paddingHorizontal={12}>
      <Block row alignCenter marginBottom={18} space="between">
        <Text size={16} fontType="bold">
          ĐÁNH GIÁ SẢN PHẨM
        </Text>
        <Block row alignCenter>
          <Rating
            imageSize={getSize.s(15)}
            readonly
            startingValue={totalRating >= 1 && totalRating}
          />
          <Text
            color={theme.colors.pink}
            marginLeft={getSize.m(5)}
            fontType="medium">
            {checkData ? parseRating + '/5' : '0/5'}
          </Text>
          <Text
            size={14}
            color={theme.colors.lightGray}
            marginLeft={getSize.m(5)}
            fontType="medium">
            ({checkData})
          </Text>
        </Block>
      </Block>
      {checkData ? (
        <Block>{productReview?.slice(0, 2)?.map(_renderItem)}</Block>
      ) : (
        <Block alignCenter justifyCenter height={50}>
          <Text fontType="regular">Chưa có đánh giá nào cho sản phẩm này </Text>
        </Block>
      )}
      <Pressable onPress={onPress}>
        <Text center color={theme.colors.pink}>
          {checkData ? 'Xem toàn bộ đánh giá' : 'Đánh giá ngay'} ({checkData})
        </Text>
      </Pressable>
    </Block>
  );
};

export default ProductReviews;
