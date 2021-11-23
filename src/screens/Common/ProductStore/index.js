import {BackgroundColorShop, IconForward} from '@assets/svg/common';
import {Block, Carousel, Text} from '@components';
import ItemVoucherFromShop from '@components/Common/ItemList/ItemVoucherFromShop';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import actions from '@redux/actions';
import SellingProduct from '@screens/Bottom/HomeScreens/components/SellingProduct';
import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import React, {useEffect} from 'react';
import {FlatList, Pressable, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ProductRelated from '../ProductDetails/components/ProductRelated';
import moment from 'moment';
import InforShop from './components/InforShop';
import SearchShop from './components/SearchShop';
import styles from './styles';

const ProductStore = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const shop = useSelector(state => state.infoShop?.data);
  const productShop = useSelector(state => state.productDetailsShop?.data);
  const config = useSelector(state => state.config?.data);
  const shopVoucher = useSelector(state => state.shopVoucher?.data);

  const {id} = route.params || {};

  useEffect(() => {
    if (id) {
      dispatch({
        type: actions.GET_SHOP_USERS_BY_ID,
        body: {
          shopId: id,
        },
      });
      dispatch({
        type: actions.GET_PRODUCT_DETAILS_BY_SHOP,
        params: {
          shopId: id,
        },
      });
      dispatch({
        type: actions.GET_SHOP_VOUCHERS,
        params: {
          shopId: id,
        },
      });
    }
  }, [id, dispatch]);

  const _renderBanner = () => {
    return (
      <Block marginTop={-18}>
        {shop?.banner && <Carousel shop data={shop?.banner} />}
      </Block>
    );
  };

  const _renderVoucher = ({item}) => {
    return (
      <ItemVoucherFromShop
        typeVoucher={item.content}
        timeVoucher={moment(item.expireDate).format('DD/MM/YYYY')}
      />
    );
  };

  const _renderTitleVoucher = () => {
    return (
      <Block paddingHorizontal={12} row space="between" marginBottom={10}>
        <Text
          lineHeight={20}
          size={16}
          fontType="bold"
          color={theme.colors.black}>
          Mã giảm giá
        </Text>
        <Pressable
          style={styles.wrapperTextVoucher}
          onPress={() =>
            navigation.navigate(routes.PROMO_SCREEN, {
              id: shop?._id,
              shopName: shop?.shopName,
            })
          }>
          <Text color={config?.backgroundcolor} lineHeight={18}>
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
          data={shopVoucher}
          renderItem={_renderVoucher}
          keyExtractor={item => item._id.toString()}
        />
      </Block>
    );
  };

  return (
    <Block flex>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <BackgroundColorShop width={width} height={getSize.s(375)} />
        <Block
          absolute
          width={width}
          style={{zIndex: getSize.s(99)}}
          paddingHorizontal={12}>
          <SearchShop />
          <InforShop data={shop} />
          <_renderBanner />
        </Block>
        <_renderVoucherShop />

        <Block backgroundColor={theme.colors.white}>
          {productShop && (
            <ProductRelated
              productCategory={productShop}
              nameTitle="Sản phẩm bán chạy"
            />
          )}
        </Block>
        <Block marginVertical={10} backgroundColor={theme.colors.white}>
          {productShop && (
            <SellingProduct data={productShop} titleSelling="Tất cả sản phẩm" />
          )}
        </Block>
      </ScrollView>
    </Block>
  );
};

export default ProductStore;
