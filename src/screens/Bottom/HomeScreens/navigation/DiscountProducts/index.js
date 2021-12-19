import {Block, Header, Text} from '@components';
import ItemProduct from '@components/Common/ItemList/ItemProduct';
import ItemSaleProducts from '@components/Common/ItemList/ItemSaleProducts';
import actions, {_onUnmount} from '@redux/actions';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';

const keyExtractor = (item, index) => item._id.toString();

const DiscountProducts = ({route}) => {
  const {bottom} = useSafeAreaInsets();
  const {title, percent} = route?.params || {};
  const dispatch = useDispatch();
  const data = useSelector(state => state.productByDiscountValue?.data);

  useEffect(() => {
    dispatch({
      type: actions.GET_PRODUCTS_BY_DISCOUNT_VALUE,
      params: {
        sellOff: percent,
      },
    });
  }, [dispatch]);

  const _renderItem = ({item, index}) => {
    return (
      <ItemProduct
        key={index}
        review={item.reviews}
        style={styles.style_item(index)}
        _id={item._id}
        images={item.images[0]}
        nameProduct={item.name}
        price={item.price}
        productSold={item.productSold}
        sellOff={item.sellOff}
      />
    );
  };

  return (
    <Block flex>
      <Header title={title} canGoBack />
      <FlatList
        numColumns={2}
        data={data}
        renderItem={_renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.5}
        removeClippedSubviews={true}
        contentContainerStyle={{paddingBottom: bottom}}
      />
    </Block>
  );
};

export default DiscountProducts;
