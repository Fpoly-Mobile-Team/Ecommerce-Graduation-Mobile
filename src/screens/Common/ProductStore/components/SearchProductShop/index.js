import {icons} from '@assets';
import {ChevronLeft} from '@assets/svg/common';
import {Block} from '@components';
import ItemSearchProduct from '@components/Common/ItemList/ItemSearchProduct';
import SellingProduct from '@screens/Bottom/HomeScreens/components/SellingProduct';
import {useNavigation} from '@react-navigation/core';
import actions from '@redux/actions';
import {theme} from '@theme';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import ProductRelated from '@screens/Common/ProductDetails/components/ProductRelated';

const SearchProductShop = ({route}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const datasearch = useSelector(state => state.searchProductShop?.data);
  const [refreshing, setRefreshing] = useState(false);
  const productShop = useSelector(state => state.productDetailsShop?.data);
  const [keyword, setKeyword] = useState('');
  const {top} = useSafeAreaInsets();

  const {id} = route.params || {};

  useEffect(() => {
    dispatch({
      type: actions.GET_PRODUCT_DETAILS_BY_SHOP,
      params: {
        shopId: id,
      },
    });
  }, [id, dispatch]);

  useEffect(() => {
    if (keyword) {
      dispatch({
        type: actions.SEARCH_PRODUCT_SHOP,
        params: {
          name: keyword,
          shopId: id,
        },
      });
    }
  }, [dispatch, keyword]);

  const _onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);

    if (keyword) {
      dispatch({
        type: actions.SEARCH_PRODUCT_SHOP,
        params: {
          name: keyword,
          shopId: id,
        },
      });
    }
  };

  const renderItemSearchProduct = ({item, index}) => (
    <ItemSearchProduct
      key={index}
      title={item.name}
      image={item.images[0]}
      _id={item._id}
    />
  );

  const ProductSugges = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block marginHorizontal={-12} backgroundColor={theme.colors.white}>
          {productShop && (
            <SellingProduct
              data={productShop.slice(0, 4)}
              titleSelling="Sản phẩm gợi ý"
            />
          )}
        </Block>
      </ScrollView>
    );
  };
  return (
    <Block flex backgroundColor="white">
      <StatusBar barStyle="dark-content" />
      <Block
        row
        alignCenter
        justifyCenter
        paddingTop={top + 10}
        space="between"
        padding={12}>
        <Pressable onPress={() => navigation.goBack()}>
          <Block marginRight={10}>
            <ChevronLeft />
          </Block>
        </Pressable>
        <Block
          flex
          row
          alignCenter
          backgroundColor={theme.colors.smoke}
          paddingHorizontal={12}
          radius={5}>
          <Image
            resizeMode="contain"
            source={icons.search}
            style={styles.iconSearch}
          />
          <TextInput
            placeholder="Bạn cần tìm gì ..."
            placeholderTextColor={theme.colors.placeholder}
            style={styles.inputStyle}
            onChangeText={text => setKeyword(text)}
          />
        </Block>
      </Block>

      <Block paddingHorizontal={12}>
        {keyword ? (
          <FlatList
            data={datasearch}
            renderItem={renderItemSearchProduct}
            keyExtractor={(_, index) => _._id.toString()}
            showsVerticalScrollIndicator={false}
            refreshing={refreshing}
            onEndReachedThreshold={0.5}
            onRefresh={_onRefresh}
            removeClippedSubviews={true}
          />
        ) : (
          <ProductSugges />
        )}
      </Block>
    </Block>
  );
};

export default SearchProductShop;
