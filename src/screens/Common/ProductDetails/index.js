import {Block} from '@components';
import {theme} from '@theme';
import React, {useRef} from 'react';
import {Animated, StatusBar} from 'react-native';
import ContentProductDetails from './components/ContentProductDetails';
import HeaderDetails from './components/HeaderDetails';
import ImageHeader from './components/ImageHeader';
import ProductInformation from './components/ProductInformation';
import ShopProduct from './components/ShopProduct';
import ChooseTypeProduct from './components/ChooseTypeProduct';
import ProductReviews from './components/ProductReviews';
import ProductRelated from './components/ProductRelated';

const ProductDetails = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <Block flex backgroundColor={theme.colors.white}>
      <StatusBar translucent barStyle="dark-content" />
      <HeaderDetails scroll={scrollY} />
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        bounces={false}
        removeClippedSubviews
        scrollEventThrottle={16}
        contentInsetAdjustmentBehavior="never"
        showsVerticalScrollIndicator={false}>
        <ImageHeader />
        <ContentProductDetails />
        <ShopProduct />
        <Block
          height={10}
          marginTop={10}
          backgroundColor={theme.colors.smoke}
        />
        <ProductInformation />
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
        <ProductRelated />
      </Animated.ScrollView>
      <ChooseTypeProduct />
    </Block>
  );
};

export default ProductDetails;
