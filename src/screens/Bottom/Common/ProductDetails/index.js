import {Block} from '@components';
import {theme} from '@theme';
import React, {useRef} from 'react';
import {Animated, StatusBar} from 'react-native';
import ContentProductDetails from './components/ContentProductDetails';
import HeaderDetails from './components/HeaderDetails';
import ImageHeader from './components/ImageHeader';
import ProductInformation from './components/ProductInformation';

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
        <ProductInformation />
        <ContentProductDetails />
        <ContentProductDetails />
      </Animated.ScrollView>
    </Block>
  );
};

export default ProductDetails;
