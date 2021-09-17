/* eslint-disable react-hooks/exhaustive-deps */
import {Block} from '@components';
import {getSize, width} from '@utils/responsive';
import React from 'react';
import {Image, Platform} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import styles from './styles';

const Carousel = ({data, checkBorder}) => {
  const _renderItem = React.useCallback(({item}) => {
    return (
      <Block>
        <Image
          source={{uri: item.banner}}
          style={{
            width: checkBorder ? width - 49.2 / 2 : width - 24,
            height: width / 3,
            borderRadius: checkBorder ? 8 : 0,
          }}
          resizeMode="contain"
        />
      </Block>
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
        index={3}
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
