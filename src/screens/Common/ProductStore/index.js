import {BackgroundColorShop, IconForward} from '@assets/svg/common';
import {Block, Carousel, Text} from '@components';
import ItemVoucherFromShop from '@components/Common/ItemList/ItemVoucherFromShop';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import SellingProduct from '@screens/Bottom/HomeScreens/components/SellingProduct';
import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import React from 'react';
import {FlatList, Pressable, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import ProductRelated from '../ProductDetails/components/ProductRelated';
import {DATA} from './components/data';
import InforShop from './components/InforShop';
import SearchShop from './components/SearchShop';
import styles from './styles';

const ProductStore = () => {
  const navigation = useNavigation();
  const banner = useSelector(state => state.banner?.data);

  const _renderBanner = () => {
    return (
      <Block marginTop={-18}>{banner && <Carousel data={banner} />}</Block>
    );
  };

  const _renderVoucher = ({item}) => {
    return (
      <ItemVoucherFromShop typeVoucher={item.type} timeVoucher={item.time} />
    );
  };

  const _renderTitleVoucher = () => {
    return (
      <Block paddingHorizontal={12} row space="between" marginBottom={10}>
        <Text
          lineHeight={20}
          size={16}
          fontType="semibold"
          color={theme.colors.black}>
          Mã giảm giá
        </Text>
        <Pressable
          style={styles.wrapperTextVoucher}
          onPress={() => navigation.navigate(routes.PROMO_SCREEN)}>
          <Text color="#823FFD" lineHeight={18}>
            Xem thêm
          </Text>
          <Block alignCenter justifyCenter paddingLeft={4}>
            <IconForward />
          </Block>
        </Pressable>
      </Block>
    );
  };

  const _renderVoucherShop = () => {
    return (
      <Block
        backgroundColor={theme.colors.white}
        paddingTop={12}
        marginBottom={10}
        marginTop={-30}>
        <_renderTitleVoucher />
        <FlatList
          style={{marginLeft: getSize.s(12)}}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={_renderVoucher}
          keyExtractor={item => item.id.toString()}
        />
      </Block>
    );
  };

  return (
    <Block flex>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <BackgroundColorShop width={width} height={getSize.s(375)} />
        <Block absolute style={{zIndex: getSize.s(99)}} paddingHorizontal={12}>
          <SearchShop />
          <InforShop />
          <_renderBanner />
        </Block>
        <_renderVoucherShop />

        <Block backgroundColor={theme.colors.white}>
          <ProductRelated nameTitle="Sản phẩm bán chạy" />
        </Block>
        <Block marginTop={10} backgroundColor={theme.colors.white}>
          <SellingProduct titleSelling="Tất cả sản phẩm" />
        </Block>
      </ScrollView>
    </Block>
  );
};

export default ProductStore;
