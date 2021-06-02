/* eslint-disable react-hooks/exhaustive-deps */
import {Block} from '@components';
import {getSize, width} from '@utils/responsive';
import React from 'react';
import {Image, Platform} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import styles from './styles';

const data = [
  'https://cf.shopee.vn/file/2154b67c24a54aae907f4546b58b23ca',
  'https://cf.shopee.vn/file/21ae6f4160a20bc3d57d6ffee625d343',
  'https://cf.shopee.vn/file/0cdbcb18b8c959da2bf3be64b6446560',
  'https://cf.shopee.vn/file/4f11b4fbc8cf97b09bdfa07722c54ea9',
  'https://cf.shopee.vn/file/11304ff42346cf5f39c18dca7e85fa62',
  'https://cf.shopee.vn/file/00efeacb1f7f58b9c859bbb1333d8e39',
  'https://cf.shopee.vn/file/9e38c34d798fbb9b4e38d4d6287f428d',
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
