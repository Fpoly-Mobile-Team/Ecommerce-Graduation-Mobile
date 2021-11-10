import {Block, Empty} from '@components';
import {theme} from '@theme';
import React, {useRef, useEffect} from 'react';
import {Animated, StatusBar} from 'react-native';
import ContentProductDetails from './components/ContentProductDetails';
import HeaderDetails from './components/HeaderDetails';
import ImageHeader from './components/ImageHeader';
import ProductInformation from './components/ProductInformation';
import ShopProduct from './components/ShopProduct';
import ChooseTypeProduct from './components/ChooseTypeProduct';
import ProductReviews from './components/ProductReviews';
import ProductRelated from './components/ProductRelated';
import {useSelector, useDispatch} from 'react-redux';
import actions, {_onUnmount} from '@redux/actions';
import {lottie} from '@assets';

const ProductDetails = ({route}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  const dispatch = useDispatch();
  const {_id} = route.params;
  const data = useSelector(state => state.productDetails?.data);
  const isLoadingDetails = useSelector(
    state => state.productDetails?.isLoading,
  );
  const isLoadingShop = useSelector(state => state.infoShop?.isLoading);
  const isLoadingproductShop = useSelector(
    state => state.productDetailsShop?.isLoading,
  );
  const isLoadingproductCategory = useSelector(
    state => state.productDetailsByCategory?.isLoading,
  );
  const shop = useSelector(state => state.infoShop?.data);
  const productShop = useSelector(state => state.productDetailsShop?.data);
  const productCategory = useSelector(
    state => state.productDetailsByCategory?.data,
  );
  const isLoading =
    isLoadingDetails ||
    isLoadingShop ||
    isLoadingproductShop ||
    isLoadingproductCategory;

  useEffect(() => {
    dispatch({
      type: actions.GET_PRODUCT_BY_ID,
      body: {
        productId: _id,
      },
    });
    return () => {
      dispatch({type: _onUnmount(actions.GET_PRODUCT_BY_ID)});
    };
  }, [_id, dispatch]);

  useEffect(() => {
    if (data) {
      dispatch({
        type: actions.GET_SHOP_USERS_BY_ID,
        body: {
          shopId: data?.shopId,
        },
      });
      dispatch({
        type: actions.GET_PRODUCT_DETAILS_BY_SHOP,
        params: {
          shopId: data?.shopId,
        },
      });
      dispatch({
        type: actions.GET_PRODUCT_BY_CATEGORY,
        body: {
          subCategoryId: data?.subCategory,
        },
      });
    }

    return () => {
      dispatch({type: _onUnmount(actions.GET_SHOP_USERS_BY_ID)});
      dispatch({type: _onUnmount(actions.GET_PRODUCT_DETAILS_BY_SHOP)});
      dispatch({type: _onUnmount(actions.GET_PRODUCT_BY_CATEGORY)});
    };
  }, [_id, data, dispatch]);
  return (
    <Block flex backgroundColor={theme.colors.white}>
      <StatusBar translucent barStyle="dark-content" />
      {isLoading ? (
        <Empty
          lottie={lottie.emptyProductDetails}
          content="Vui lòng đợi trong giây lát..."
        />
      ) : (
        <>
          <HeaderDetails
            scroll={scrollY}
            nameProduct={data?.name}
            scrollViewRef={scrollViewRef}
          />
          <Animated.ScrollView
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: scrollY}}}],
              {useNativeDriver: false},
            )}
            ref={scrollViewRef}
            bounces={false}
            removeClippedSubviews
            scrollEventThrottle={16}
            contentInsetAdjustmentBehavior="never"
            showsVerticalScrollIndicator={false}>
            <ImageHeader data={data?.images} />

            <ContentProductDetails
              nameProduct={data?.name}
              price={data?.price}
              sellOff={data?.sellOff}
              numberOfReviews={data?.comments.length}
              productSold={data?.productSold}
              idProduct={_id}
            />

            <ShopProduct data={shop} productShop={productShop} id={_id} />
            <Block
              height={10}
              marginTop={10}
              backgroundColor={theme.colors.smoke}
            />
            <ProductInformation data={data} />
            <Block
              height={10}
              marginTop={10}
              backgroundColor={theme.colors.smoke}
            />
            <ProductReviews />
            <Block
              height={10}
              marginTop={10}
              backgroundColor={theme.colors.smoke}
            />
            <ProductRelated productCategory={productCategory} />
          </Animated.ScrollView>
          <ChooseTypeProduct />
        </>
      )}
    </Block>
  );
};

export default ProductDetails;
