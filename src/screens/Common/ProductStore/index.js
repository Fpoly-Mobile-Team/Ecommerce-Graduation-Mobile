import {IconForward} from '@assets/svg/common';
import {Block, Carousel, Text} from '@components';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import {height} from '@utils/responsive';
import React from 'react';
import {Pressable, FlatList, ScrollView} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import {DATA} from './components/data';
import ItemVoucherFromShop from './components/ItemVoucherFromShop';
import SellingProduct from '@screens/Bottom/HomeScreens/components/SellingProduct';
import InforShop from './components/InforShop';
import SearchShop from './components/SearchShop';
import ProductRelated from '../ProductDetails/components/ProductRelated';

const ProductStore = () => {
  const navigation = useNavigation();
  const banner = useSelector(state => state.banner?.data);

  const _renderBanner = () => {
    return (
      <Block marginTop={-18}>
        {banner && <Carousel data={banner} checkBorder />}
      </Block>
    );
  };

  const _renderVoucher = ({item}) => {
    return (
      <ItemVoucherFromShop typeVoucher={item.type} timeVoucher={item.time} />
    );
  };

  const _renderTitleVoucher = () => {
    return (
      <Block marginBottom={10} paddingHorizontal={12} row space="between">
        <Text
          lineHeight={20}
          size={16}
          fontType="semibold"
          color={theme.colors.black}>
          Mã giảm giá
        </Text>
        <Pressable style={styles.wrapperTextVoucher}>
          <Text color={'#823FFD'} lineHeight={18}>
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
        marginBottom={10}>
        <_renderTitleVoucher />
        <FlatList
          style={{marginLeft: 12}}
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block
          style={styles.borderBottom}
          backgroundColor={theme.colors.blueShop}
          height={height / 3}
          marginBottom={38}
          paddingHorizontal={12}>
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
