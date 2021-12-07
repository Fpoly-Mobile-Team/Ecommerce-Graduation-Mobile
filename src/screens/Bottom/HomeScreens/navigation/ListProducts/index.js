import {Block, Header} from '@components';
import ItemProduct from '@components/Common/ItemList/ItemProduct';
import ItemSaleProducts from '@components/Common/ItemList/ItemSaleProducts';
import actions, {_onUnmount} from '@redux/actions';
import moment from 'moment';
import React, {useEffect, useState, useRef} from 'react';
import {Alert, FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import RBSheetEvent from './components/BottomEvent';
import SortComponent from './components/SortComponent';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';

const keyExtractor = (item, index) => item._id.toString();

const ListProducts = ({route}) => {
  const refRBSheet = useRef();
  const {bottom} = useSafeAreaInsets();
  const dispatch = useDispatch();
  const product = useSelector(state => state.productSale?.data);
  const totalPage = useSelector(state => state.productSale?.totalPage);
  const navigation = useNavigation();

  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  const {tag, title, idProvince, name, idCate, nameCate} = route.params || {};
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (idProvince || idCate) {
      refRBSheet.current.open();
    }
  }, [idProvince, idCate]);
  useEffect(() => {
    dispatch({
      type: actions.GET_PRODUCT_SALE,
      params: {
        p: 1,
        numshow: 6,
      },
    });
  }, [dispatch]);

  const onRefresh = () => {
    navigation.navigate(routes.LIST_PRODUCTS);
    setValue(0);
    route.params.idProvince = null;
    route.params.idCate = null;
  };

  const saleProducts = product?.filter(
    v => moment(v?.saleStart) <= Date.now() && Date.now() <= moment(v?.saleEnd),
  );
  const data = tag === '0' ? saleProducts : product;

  useEffect(() => {
    return () => {
      dispatch({type: _onUnmount(actions.GET_PRODUCT_SALE)});
    };
  }, [dispatch]);

  const _renderItem = ({item, index}) => {
    if (tag === '0') {
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
              _id={item._id}
              left={-0.75}
              price={item.price}
              productSold={item.productSold}
              sellOff={item.sellOff}
              style={styles.style_item(index)}
            />
          );
        } else {
          return null;
        }
      }
    }
    if (tag === '1') {
      return (
        <ItemProduct
          key={index}
          review={item.reviews}
          style={styles.style_item(index)}
          _id={item._id}
          images={item.images[0]}
          nameProduct={item.name}
          price={item.price}
          productSold={item.productSold}
          sellOff={item.sellOff}
        />
      );
    }
  };

  const _loadMore = () => {
    if (page < totalPage) {
      setPage(page + 1);
      dispatch({
        type: actions.GET_PRODUCT_SALE,
        isLoadMore: true,
        params: {
          p: page + 1,
          numshow: 6,
        },
      });
    }
  };

  const _onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
    setPage(1);
    dispatch({
      type: actions.GET_PRODUCT_SALE,
      params: {
        p: 1,
        numshow: 6,
      },
    });
  };

  return (
    <Block flex>
      <Header title={title} canGoBack checkBackground />
      <SortComponent
        idProvince={idProvince}
        idCate={idCate}
        price={value}
        refRBSheet={refRBSheet}
      />

      <FlatList
        numColumns={2}
        data={data}
        renderItem={_renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.5}
        onRefresh={_onRefresh}
        onEndReached={_loadMore}
        removeClippedSubviews={true}
        contentContainerStyle={{paddingBottom: bottom}}
        refreshing={refreshing}
      />
      {/* {isLoading && page > 1 && <LoadMore />} */}
      <RBSheetEvent
        idProvince={idProvince}
        nameProvice={name}
        idCate={idCate}
        nameCate={nameCate}
        refRBSheet={refRBSheet}
        value={value}
        setValue={setValue}
        onPress={onRefresh}
      />
    </Block>
  );
};

export default ListProducts;
