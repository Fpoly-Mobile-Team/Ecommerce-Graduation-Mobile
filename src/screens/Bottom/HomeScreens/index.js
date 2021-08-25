import {Block, Carousel, Header} from '@components';
import actions from '@redux/actions';
import {theme} from '@theme';
import {height} from '@utils/responsive';
import React, {useRef, useState, useEffect} from 'react';
import {Animated, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CategoryHighlights from './components/CategoryHighlights';
import FeaturedCategory from './components/FeaturedCategory';
import FeaturedShop from './components/FeaturedShop';
import FlashSale from './components/FlashSale';
import SellingProduct from './components/SellingProduct';
import styles from './styles';

const HomeScreens = () => {
  const dispatch = useDispatch();
  const banner = useSelector(state => state.banner?.data);
  const config = useSelector(state => state.config?.data);
  const scrollY = useRef(new Animated.Value(0)).current;
  const [refresh, setrefresh] = useState(false);
  const _onRefresh = () => {
    setTimeout(() => {
      setrefresh(true);
    }, 1000);
  };

  useEffect(() => {
    dispatch({type: actions.GET_BANNER});
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
        <Block
          height={60 + height}
          marginTop={-height - 60}
          backgroundColor={config?.backgroundcolor || theme.colors.pink}
        />
        <Block
          paddingHorizontal={12}
          backgroundColor={config?.backgroundcolor || theme.colors.pink}>
          {banner && <Carousel data={banner} />}
        </Block>
        <CategoryHighlights />
        <FlashSale />
        <Block
          height={8}
          marginTop={10}
          marginBottom={10}
          backgroundColor={theme.colors.smoke}
        />
        <FeaturedCategory />
        <Block
          height={8}
          marginBottom={10}
          marginTop={5}
          backgroundColor={theme.colors.smoke}
        />
        <FeaturedShop />
        <Block height={8} backgroundColor={theme.colors.smoke} />
        <Block paddingHorizontal={12}>
          {banner && <Carousel data={banner} />}
        </Block>
        <SellingProduct />
      </Animated.ScrollView>
    </Block>
  );
};

export default HomeScreens;
