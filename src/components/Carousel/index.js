/* eslint-disable react-hooks/exhaustive-deps */
import {Block} from '@components';
import {getSize, width} from '@utils/responsive';
import React from 'react';
import {Image, Platform} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import styles from './styles';

const data = [
  'https://cf.shopee.vn/file/53a8bd5f5e3640bc6b46050545bc3fb3',
  'https://cf.shopee.vn/file/f4467b565a890cc6a43fad227ab19bbe',
  'https://cf.shopee.vn/file/0cdbcb18b8c959da2bf3be64b6446560',
  'https://cf.shopee.vn/file/4f11b4fbc8cf97b09bdfa07722c54ea9',
  'https://cf.shopee.vn/file/e00e69599655258de2535ffc9d59f0a7',
  'https://cf.shopee.vn/file/4f22aada2325886567779f337665c4bd',
  'https://cf.shopee.vn/file/e0a813d7db376a7c007b59786e536831',
];

const Carousel = () => {
  const _renderItem = React.useCallback(({item}) => {
    return (
      <Block>
        <Image
          source={{uri: item}}
          style={{
            width: width - 24,
            height: width / 3,
          }}
          resizeMode="contain"
        />
      </Block>
    );
  }, []);

  const keyExtractor = React.useCallback((item, index) => String(index), []);

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
