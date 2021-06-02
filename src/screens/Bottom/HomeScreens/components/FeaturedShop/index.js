/* eslint-disable react-hooks/exhaustive-deps */
import {icons} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {FlatList, Image, Platform, Pressable} from 'react-native';
import {Rating} from 'react-native-elements';
import styles from './styles';
const data = [
  {
    image:
      'https://shopbonglua.net/wp-content/uploads/2019/08/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-adidas_2-1.jpg',
    title: 'Adidas',
  },
  {
    image:
      'https://static.dosi-in.com/images/news_content/18411/2020/06/25/behind-the-hype-nike-va-swoosh-y-nghia-logo-va-cau-chuyen-chua-tung-ke_2020_06_25_0.jpg',
    title: 'Nike',
  },
  {
    image:
      'https://i.pinimg.com/originals/e2/e9/f7/e2e9f71f0430e7d390d537475292eff6.png',
    title: 'Converse',
  },
  {
    image: 'https://giaysneaker.com.vn/public/media/thuong-hieu-giay-puma.jpg',
    title: 'Puma',
  },
  {
    image:
      'https://leflair-assets.storage.googleapis.com/5dc66e3172fc8c30e613f979.png',
    title: 'Dior',
  },
];
const FeaturedShop = () => {
  const _renderItem = React.useCallback(({item, index}) => {
    return (
      <Pressable key={index}>
        <Block
          row
          shadow
          alignCenter
          paddingVertical={16}
          paddingHorizontal={12}
          radius={5}
          margin={3}
          backgroundColor="white">
          <Image
            source={{uri: item.image}}
            style={{
              width: getSize.s(70),
              height: getSize.s(70),
            }}
            resizeMode="contain"
          />
          <Block marginLeft={14}>
            <Block row alignCenter>
              <Text size={16} marginRight={5} fontType="semibold">
                {item.title}
              </Text>
              <Image
                source={icons.tick}
                style={styles.icontick}
                resizeMode="contain"
              />
            </Block>
            <Text fontType="semibold" color={theme.colors.placeholder}>
              546 Product
            </Text>
            <Block row alignCenter>
              <Rating
                imageSize={getSize.s(15)}
                readonly
                startingValue={4}
                style={{paddingVertical: getSize.m(5)}}
              />
              <Text size={12} marginLeft={getSize.m(5)}>
                (25)
              </Text>
            </Block>
          </Block>
        </Block>
      </Pressable>
    );
  }, []);

  const keyExtractor = React.useCallback((item, index) => String(index), []);

  const memoizedValue = React.useMemo(() => _renderItem, [data]);
  return (
    <Block marginBottom={20}>
      <Text marginBottom={16} paddingHorizontal={12} size={16} fontType="bold">
        Shop Nổi Bật
      </Text>
      <Block paddingLeft={9}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
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
