import {Block, Header, LoadMore} from '@components';
import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import actions, {_onUnmount} from '@redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import ItemSaleProducts from '@components/Common/ItemList/ItemSaleProducts';
import ItemProduct from '@components/Common/ItemList/ItemProduct';
import moment from 'moment';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const keyExtractor = (item, index) => item._id.toString();

const ListProducts = ({route}) => {
  const {bottom} = useSafeAreaInsets();
  const dispatch = useDispatch();
  const product = useSelector(state => state.productSale?.data);
  const totalPage = useSelector(state => state.productSale?.totalPage);
  const isLoading = useSelector(state => state.productSale?.isLoading);

  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  const {tag, title} = route.params || {};

  useEffect(() => {
    dispatch({
      type: actions.GET_PRODUCT_SALE,
      params: {
        p: 1,
        numshow: 6,
      },
    });
  }, [dispatch]);

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
              images={item.images[0]}
              nameProduct={item.name}
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
          style={styles.style_item(index)}
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
    <Block flex paddingBottom={bottom}>
      <Header title={title} canGoBack />
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
        refreshing={refreshing}
      />
      {/* {isLoading && page > 1 && <LoadMore />} */}
    </Block>
  );
};

export default ListProducts;
