import {Block, Text} from '@components';
import ItemFeedBack from '@components/Common/ItemList/ItemFeedBack';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Pressable} from 'react-native';
import {Rating} from 'react-native-elements';

const ProductReviews = () => {
  const _renderItem = (item, index) => <ItemFeedBack key={index} />;

  return (
    <Block marginTop={10} paddingHorizontal={12}>
      <Block row alignCenter marginBottom={10} space="between">
        <Text size={16} fontType="semibold">
          ĐÁNH GIÁ SẢN PHẨM
        </Text>
        <Block row alignCenter>
          <Rating imageSize={getSize.s(15)} readonly startingValue={4} />
          <Text color={theme.colors.pink} marginLeft={getSize.m(5)}>
            4/5
          </Text>
          <Text
            size={14}
            color={theme.colors.lightGray}
            marginLeft={getSize.m(5)}>
            (25)
          </Text>
        </Block>
      </Block>
      <Block>{[1, 2, 3].map(_renderItem)}</Block>
      <Pressable>
        <Text center color={theme.colors.pink}>
          Xem toàn bộ đánh giá (15)
        </Text>
      </Pressable>
    </Block>
  );
};

export default ProductReviews;
