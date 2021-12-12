import {icons} from '@assets';
import {Block, Text} from '@components';
import ItemSaleProducts from '@components/Common/ItemList/ItemSaleProducts';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import moment from 'moment';
import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Platform,
  Pressable,
} from 'react-native';
import styles from './styles';

const FlashSale = ({data}) => {
  const navigation = useNavigation();
  const _renderItem = ({item}) => {
    if (item?.saleStart !== null && item?.saleEnd) {
      if (
        moment(item?.saleStart) <= Date.now() &&
        Date.now() <= moment(item?.saleEnd)
      ) {
        return (
          <ItemSaleProducts
            review={item.reviews}
            images={item.images[0]}
            nameProduct={item.name}
            left={-0.75}
            _id={item._id}
            price={item.price}
            productSold={item.productSold}
            sellOff={item.sellOff}
            style={styles.styleitem}
          />
        );
      } else {
        return null;
      }
    }
  };

  const onPress = () => {
    navigation.navigate(routes.LIST_PRODUCTS, {
      tag: '0',
      title: 'Giá Sốc Hôm Nay',
    });
  };

  const keyExtractor = React.useCallback((item, index) => String(index), []);

  return (
    <ImageBackground
      source={icons.bg_flash}
      style={styles.imgbackground}
      imageStyle={styles.imageStyle}
      resizeMode="cover">
      <Block row alignCenter padding={10} space="between">
        <Block row alignCenter>
          <Image
            source={icons.giasoc}
            style={styles.styleflash}
            resizeMode="contain"
          />
          <Image
            source={icons.flash}
            style={{
              ...styles.styleflash,
              width: getSize.s(20),
              height: getSize.s(20),
            }}
            resizeMode="contain"
          />
          <Image
            source={icons.homnay}
            style={{...styles.styleflash, width: getSize.s(113)}}
            resizeMode="contain"
          />
        </Block>
        <Pressable
          hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
          style={styles.stylebtn}
          onPress={onPress}>
          <Text size={12} color={theme.colors.white}>
            Xem tất cả
          </Text>
          <Image
            source={icons.next}
            style={styles.iconnext}
            resizeMode="contain"
          />
        </Pressable>
      </Block>
      <Block paddingHorizontal={6}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          maxToRenderPerBatch={5}
          updateCellsBatchingPeriod={30}
          initialNumToRender={6}
          disableVirtualization={false}
          windowSize={5}
          removeClippedSubviews={Platform.OS === 'ios' ? true : false}
          renderItem={_renderItem}
          keyExtractor={keyExtractor}
        />
      </Block>
    </ImageBackground>
  );
};

export default FlashSale;
