import {Plus_Ants} from '@assets/svg/common';
import {Block, Header, Text} from '@components';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React, {useRef} from 'react';
import {FlatList, Pressable, ScrollView} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import CardReviews from './components/CardReviews';
import StarRating from './components/StarRating';
import WritingReviews from './components/WritingReviews';
import {data} from './data';
import styles from './styles';

const ProductReviews = () => {
  const navigation = useNavigation();
  const refRBSheet = useRef();

  const _renderTop = () => {
    return (
      <Block row space="between" marginTop={24}>
        <Text size={24} fontType="bold">
          2 đánh giá
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
        name={item.name}
        avatar={item.avatar}
        star={item.star}
        time={item.time}
        image01={item.image01}
        image02={item.image02}
        image03={item.image03}
        description={item.description}
      />
    );
  };

  return (
    <Block flex backgroundColor="#F9F9F9">
      <Header checkBackground canGoBack title="Đánh giá" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.wrapperScroll}>
        <_renderTop />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          contentContainerStyle={{
            paddingTop: getSize.m(24),
          }}
          renderItem={_renderCardReviews}
          keyExtractor={item => item.id.toString()}
        />
      </ScrollView>

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
            height: '70%',
            backgroundColor: theme.colors.white,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}>
        <Block marginBottom={0} marginTop={20}>
          <Block alignCenter>
            <Text
              size={18}
              fontType="bold"
              paddingHorizontal={0}
              center
              marginBottom={20}>
              Đánh giá của bạn
            </Text>
            <StarRating startingValue={0} imageSize={36} readonly />
            <Text
              size={18}
              fontType="semibold"
              paddingHorizontal={0}
              center
              marginTop={30}>
              Hãy chia sẻ ý kiến của bạn về sản phẩm
            </Text>
          </Block>
        </Block>
        <WritingReviews isClosed={refRBSheet} />
      </RBSheet>
    </Block>
  );
};

export default ProductReviews;
