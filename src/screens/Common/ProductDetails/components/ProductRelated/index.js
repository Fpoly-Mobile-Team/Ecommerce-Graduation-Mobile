import {icons} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Pressable, Image, FlatList, Platform} from 'react-native';
import styles from './styles';
import ItemProduct from '@components/Common/ItemList/ItemProduct';

const _renderItem = ({item}) => (
  <ItemProduct
    _id={item._id}
    left={-0.75}
    review={item.reviews}
    style={styles.styleitem}
    images={item.images[0]}
    nameProduct={item.name}
    price={item.price}
    productSold={item.productSold}
    sellOff={item.sellOff}
  />
);

const ProductRelated = ({nameTitle, productCategory, random}) => {
  return (
    <Block paddingHorizontal={12} paddingTop={10}>
      <Block row alignCenter space="between">
        <Text size={16} fontType="bold">
          {nameTitle ? nameTitle : 'Sản phẩm tương tự'}
        </Text>
        <Pressable>
          {nameTitle ? null : (
            <Block row alignCenter>
              <Text color={theme.colors.pink}>Xem tất cả</Text>
              <Image
                source={icons.next}
                style={styles.iconnext}
                resizeMode="contain"
              />
            </Block>
          )}
        </Pressable>
      </Block>
      <Block marginTop={10}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={random ? random : productCategory?.slice(0, 10)}
          maxToRenderPerBatch={5}
          updateCellsBatchingPeriod={30}
          initialNumToRender={6}
          disableVirtualization={false}
          windowSize={5}
          removeClippedSubviews={Platform.OS === 'ios' ? true : false}
          renderItem={_renderItem}
          keyExtractor={(item, index) => item._id.toString()}
        />
      </Block>
    </Block>
  );
};

export default ProductRelated;
