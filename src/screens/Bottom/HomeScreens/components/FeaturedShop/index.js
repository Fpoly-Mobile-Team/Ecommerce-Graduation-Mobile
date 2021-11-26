/* eslint-disable react-hooks/exhaustive-deps */
import {icons} from '@assets';
import {Block, Text} from '@components';
import ItemShop from '@components/Common/ItemList/ItemShop';
import {FlatList, Image, Platform, Pressable} from 'react-native';
import styles from './styles';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import React from 'react';

const FeaturedShop = ({data}) => {
  const navigation = useNavigation();
  const _renderItem = React.useCallback(({item, index}) => {
    return <ItemShop item={item} index={index} />;
  }, []);

  const keyExtractor = React.useCallback((item, index) => String(index), []);

  const memoizedValue = React.useMemo(() => _renderItem, [data]);
  return (
    <Block marginBottom={13}>
      <Block
        row
        alignCenter
        paddingHorizontal={12}
        marginBottom={16}
        space="between">
        <Text size={16} fontType="bold">
          Shop Nổi Bật
        </Text>
        <Pressable
          style={styles.stylebtn}
          onPress={() => navigation.navigate(routes.ALL_STORE)}>
          <Text size={12}>Xem tất cả</Text>
          <Image
            source={icons.next}
            style={styles.iconnext}
            resizeMode="contain"
          />
        </Pressable>
      </Block>

      <Block paddingHorizontal={9}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data?.slice(0, 5)}
          removeClippedSubviews={Platform.OS === 'ios' ? true : false}
          renderItem={memoizedValue}
          maxToRenderPerBatch={5}
          updateCellsBatchingPeriod={30}
          initialNumToRender={6}
          disableVirtualization={false}
          windowSize={5}
          keyExtractor={keyExtractor}
        />
      </Block>
    </Block>
  );
};

export default FeaturedShop;
