import {lottie} from '@assets';
import {Block, Empty, Header, Text} from '@components';
import actions from '@redux/actions';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import moment from 'moment';
import React, {useEffect} from 'react';
import {FlatList, Image, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';

const MyRating = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const data = useSelector(state => state.myReview?.data);
  const user = useSelector(state => state.tokenUser?.data);

  useEffect(() => {
    dispatch({
      type: actions.GET_MY_REVIEW,
      user,
    });
  }, [dispatch, user]);

  const _renderItem = ({item, index}) => {
    return (
      <Block>
        <Pressable
          key={index}
          style={styles.wrapItems}
          onPress={() =>
            navigation.navigate(routes.PRODUCT_REVIEWS, {
              _id: item._idProduct,
            })
          }>
          <Block row alignCenter>
            <Block
              width={67}
              height={67}
              radius={67}
              borderColor={theme.colors.lightRount}
              borderWidth={1.5}
              justifyCenter
              alignCenter>
              <Image
                source={{uri: item.shopUsers.profilePicture}}
                style={styles.imageShop}
              />
            </Block>
            <Block marginHorizontal={12} width={width / 2.5}>
              <Text fontType="bold">{item.shopUsers?.shopName}</Text>
              <Text fontType="medium" size={13} numberOfLines={1}>
                {item.name}
              </Text>
            </Block>
          </Block>
          <Block>
            <Text fontType="regular" size={13}>
              {moment(item.review.reviewDate).format('DD/MM/YYYY')}
            </Text>
          </Block>
        </Pressable>
        <_renderLines />
      </Block>
    );
  };

  const _renderLines = () => {
    return <Block backgroundColor={theme.colors.background} height={2}></Block>;
  };

  const _renderEmpty = () => {
    return (
      <Empty
        lottie={lottie.relax}
        content="Bạn chưa có đánh giá nào"
        contentMore="Quay lại"
        onPress={() => navigation.goBack()}
      />
    );
  };

  return (
    <Block flex backgroundColor={theme.colors.white}>
      <Header checkBackground canGoBack title="Đánh giá của tôi" />
      {data && data?.length ? (
        <FlatList
          data={data}
          renderItem={_renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.review._id.toString()}
        />
      ) : (
        _renderEmpty()
      )}
    </Block>
  );
};

export default MyRating;
