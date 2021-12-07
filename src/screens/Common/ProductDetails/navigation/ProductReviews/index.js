import {lottie} from '@assets';
import {Plus_Ants} from '@assets/svg/common';
import {Block, Empty, Header, Text} from '@components';
import actions from '@redux/actions';
import {theme} from '@theme';
import moment from 'moment';
import React, {useEffect, useRef, useState} from 'react';
import {Pressable, ScrollView} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useDispatch, useSelector} from 'react-redux';
import CardReviews from './components/CardReviews';
import WritingReviews from './components/WritingReviews';
import styles from './styles';

const ProductReviews = ({route}) => {
  const dispatch = useDispatch();
  const refRBSheet = useRef();
  const {_id} = route.params;
  const productReview = useSelector(state => state.productReview?.data);
  const user = useSelector(state => state.tokenUser?.data);
  const [check, setCheck] = useState({});

  const noPhoto =
    'https://t-f20-zpg.zdn.vn/480/31373314168375588/1fd9c43dd0381b664229.jpg';

  let userId;
  for (let index = 0; index < productReview?.length; index++) {
    if (productReview[index]?.userId === user) {
      userId = productReview[index]?.userId;
    }
  }

  useEffect(() => {
    dispatch({
      type: actions.GET_PRODUCT_REVIEW,
      productId: _id,
    });
  }, [dispatch, _id]);

  const editReview = item => {
    setCheck(item);
    refRBSheet.current.open();
  };

  const deleteReview = id => {
    dispatch({
      type: actions.DELETE_PRODUCT_REVIEW,
      body: {
        productId: _id,
        reviewId: id,
      },
    });
  };

  const _renderTop = () => {
    return (
      <Block row space="between" marginTop={24} marginBottom={18}>
        <Text size={24} fontType="bold">
          {productReview?.length + ' đánh giá'}
        </Text>
        {user === userId
          ? null
          : user && (
              <Pressable
                onPress={() => {
                  setCheck(0);
                  refRBSheet.current.open();
                }}
                style={styles.wrapperEventAddReviews}>
                <Plus_Ants />
              </Pressable>
            )}
      </Block>
    );
  };

  const _renderCardReviews = (item, index) => {
    return (
      <CardReviews
        key={item._id}
        _id={item._id}
        name={!user ? '••••••' + item?.name?.slice(6) : item?.name}
        avatar={user ? item.avatar : noPhoto}
        star={item.rating}
        time={moment(item.reviewDate).format('DD/MM/YYYY, hh:mm')}
        image={item.image}
        description={item.review}
        onEvent={item.userId === user ? true : false}
        onEdit={() => editReview(item)}
        onDelete={() => deleteReview(item._id)}
      />
    );
  };

  const _renderEmpty = () => {
    return (
      <Empty
        lottie={lottie.relax}
        content="Sản phẩm này chưa có đánh giá"
        contentMore={user && 'Đánh giá ngay'}
        onPress={() => {
          setCheck(0);
          refRBSheet.current.open();
        }}
      />
    );
  };

  return (
    <Block flex backgroundColor={theme.colors.white}>
      <Header checkBackground canGoBack title="Đánh giá" />
      {productReview && productReview?.length ? (
        <ScrollView style={styles.wrapperScroll}>
          <_renderTop />
          {productReview?.map(_renderCardReviews)}
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
        <WritingReviews _id={_id} check={check} isClosed={refRBSheet} />
      </RBSheet>
    </Block>
  );
};
export default ProductReviews;
