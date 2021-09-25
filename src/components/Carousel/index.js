/* eslint-disable react-hooks/exhaustive-deps */
import {Block} from '@components';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Image, Platform} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import styles from './styles';

const Carousel = ({data}) => {
  const _renderItem = React.useCallback(({item}) => {
    return (
      <Image
        source={{uri: item.banner}}
        style={styles.image}
        resizeMode="contain"
      />
    );
  }, []);

  const keyExtractor = React.useCallback((item, index) => item._id, []);

  const memoizedValue = React.useMemo(() => _renderItem, [data]);

  return (
    <Block marginBottom={10}>
      <SwiperFlatList
        data={data}
        autoplay
        autoplayLoop
        autoplayDelay={3}
        keyExtractor={keyExtractor}
        renderItem={memoizedValue}
        updateCellsBatchingPeriod={30}
        initialNumToRender={6}
        disableVirtualization={false}
        windowSize={5}
        removeClippedSubviews={Platform.OS === 'ios' ? true : false}
        showPagination
        renderAll={true}
        showsHorizontalScrollIndicator={false}
        paginationStyleItem={{height: getSize.v(2), width: getSize.v(10)}}
        paginationDefaultColor="#ffffff60"
        paginationStyle={styles.paginationStyle}
      />
    </Block>
  );
};

export default Carousel;
