import {Block, Carousel, Header} from '@components';
import actions from '@redux/actions';
import {theme} from '@theme';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CategoryHighlights from './components/CategoryHighlights';
import FeaturedCategory from './components/FeaturedCategory';
import FeaturedShop from './components/FeaturedShop';
import FlashSale from './components/FlashSale';
import SellingProduct from './components/SellingProduct';
import styles from './styles';

const HomeScreens = ({route}) => {
  const dispatch = useDispatch();
  const banner = useSelector(state => state.banner?.data);
  const categoryHome = useSelector(state => state.categoryHome?.data);
  const product = useSelector(state => state.product?.data);
  const config = useSelector(state => state.config?.data);
  const shoplist = useSelector(state => state.shop?.data);
  const scrollY = useRef(new Animated.Value(0)).current;

  const [refresh, setRefresh] = useState(false);

  const _onRefresh = () => {
    setTimeout(() => {
      setRefresh(true);
    }, 1000);
  };

  useEffect(() => {
    dispatch({
      type: actions.GET_CATEGORY_HOME,
      params: {
        p: 1,
        numshow: 5,
      },
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch({type: actions.GET_BANNER});
  }, [dispatch]);

  useEffect(() => {
    dispatch({
      type: actions.GET_PRODUCT,
      params: {
        p: 1,
        numshow: 12,
      },
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch({
      type: actions.GET_SHOP_USERS,
    });
  }, [dispatch]);
  return (
    <Block flex backgroundColor="white">
      <Header type="Home" scroll={scrollY} />
      <Animated.ScrollView
        removeClippedSubviews
        scrollEventThrottle={16}
        contentInsetAdjustmentBehavior="never"
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        refreshControl={
          <RefreshControl
            style={styles.refreshing}
            onRefresh={() => _onRefresh}
            refreshing={refresh}
          />
        }>
        {/* <Block
          height={60 + height}
          marginTop={-height - 60}
          backgroundColor={config?.backgroundcolor || theme.colors.primaryColor}
        /> */}
        <Block
          paddingHorizontal={12}
          backgroundColor={
            config?.backgroundcolor || theme.colors.primaryColor
          }>
          {banner && <Carousel data={banner} />}
        </Block>
        <CategoryHighlights />
        {product && <FlashSale data={product} />}
        <Block
          height={8}
          marginTop={10}
          marginBottom={10}
          backgroundColor={theme.colors.smoke}
        />
        <FeaturedCategory data={categoryHome} />
        <Block
          height={8}
          marginBottom={10}
          marginTop={5}
          backgroundColor={theme.colors.smoke}
        />
        <FeaturedShop data={shoplist} />
        <Block height={8} backgroundColor={theme.colors.smoke} />
        <Block paddingHorizontal={12}>
          {banner && <Carousel data={banner} />}
        </Block>
        {product && <SellingProduct data={product} />}
      </Animated.ScrollView>
    </Block>
  );
};

export default HomeScreens;
