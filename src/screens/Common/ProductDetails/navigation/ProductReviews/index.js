import {Plus_Ants} from '@assets/svg/common';
import {Block, Header, Text, Empty} from '@components';
import actions from '@redux/actions';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React, {useEffect, useRef} from 'react';
import {FlatList, Pressable, ScrollView} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useDispatch, useSelector} from 'react-redux';
import CardReviews from './components/CardReviews';
import WritingReviews from './components/WritingReviews';
import styles from './styles';
import moment from 'moment';
import {lottie} from '@assets';

const ProductReviews = ({route}) => {
  const dispatch = useDispatch();
  const refRBSheet = useRef();
  const {_id} = route.params;
  const productReview = useSelector(state => state.productReview?.data);

  useEffect(() => {
    dispatch({
      type: actions.GET_PRODUCT_REVIEW,
      productId: _id,
    });
  }, [dispatch, _id]);

  const _renderTop = () => {
    return (
      <Block row space="between" marginTop={24}>
        <Text size={24} fontType="bold">
          {productReview?.length + ' đánh giá'}
        </Text>
        <Pressable
          onPress={() => refRBSheet.current.open()}
          style={styles.wrapperEventAddReviews}>
          <Plus_Ants />
        </Pressable>
      </Block>
    );
  };

  const _renderCardReviews = ({item}) => {
    return (
      <CardReviews
        _id={item._id}
        name={item.name}
        avatar={item.avatar}
        star={item.rating}
        time={moment(item.reviewDate).format('DD/MM/YYYY, hh:mm')}
        image={item.image}
        description={item.review}
      />
    );
  };

  const _renderEmpty = () => {
    return (
      <Empty
        lottie={lottie.relax}
        content="Sản phẩm này chưa có đánh giá"
        contentMore="Đánh giá ngay"
        onPress={() => refRBSheet.current.open()}
      />
    );
  };

  return (
    <Block flex backgroundColor="#F9F9F9">
      <Header checkBackground canGoBack title="Đánh giá" />
      {productReview && productReview?.length ? (
        <ScrollView
          style={styles.wrapperScroll}>
          <_renderTop />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={productReview}
            contentContainerStyle={{
              paddingTop: getSize.m(24),
            }}
            renderItem={_renderCardReviews}
            keyExtractor={item => item._id.toString()}
          />
        </ScrollView>
      ) : (
        _renderEmpty()
      )}

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        dragFromTopOnly={true}
        customStyles={{
          draggableIcon: {
            backgroundColor: theme.colors.dark,
            width: 100,
          },
          container: {
            height: '71%',
            backgroundColor: theme.colors.white,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}>
        <Block marginTop={10}>
          <Block alignCenter marginBottom={16}>
            <Text size={18} fontType="bold" center>
              ĐÁNH GIÁ CỦA BẠN
            </Text>
          </Block>
        </Block>
        <WritingReviews _id={_id} isClosed={refRBSheet} />
      </RBSheet>
    </Block>
  );
};
export default ProductReviews;
