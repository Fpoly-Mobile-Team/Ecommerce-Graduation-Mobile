import {Block, Header, Text, Dialoading} from '@components';
import ItemProduct from '@components/Common/ItemList/ItemProduct';
import ItemSaleProducts from '@components/Common/ItemList/ItemSaleProducts';
import actions, {_onUnmount} from '@redux/actions';
import moment from 'moment';
import React, {useEffect, useState, useRef} from 'react';
import {FlatList} from 'react-native';
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
  const product = useSelector(state => state.filterProduct?.data);
  const isLoading = useSelector(state => state.filterProduct?.isLoading);
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [check, setCheck] = useState({key: '1'});
  const [modalVisible, setModalVisible] = useState(false);

  const {
    titleCategory,
    titleCategorySub,
    productSub,
    tag,
    title,
    idProvince,
    name,
    idCate,
    nameCate,
  } = route.params || {};
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (idProvince || idCate) {
      refRBSheet.current.open();
    }
  }, [idProvince, idCate]);

  const onRefresh = () => {
    navigation.navigate(routes.LIST_PRODUCTS);
    setValue(0);
    route.params.idProvince = null;
    route.params.idCate = null;
    if (titleCategory) {
      dispatch({
        type: actions.FILTER_PRODUCT,
        body: {
          searchInfo: JSON.stringify({
            price: 1000000000,
            shopAddress: ' ',
            categoryName: titleCategory,
            sortByPrice: check.key === '1' ? 1 : -1,
          }),
        },
      });
    } else {
      dispatch({
        type: actions.FILTER_PRODUCT,
        body: {
          searchInfo: JSON.stringify({
            price: 1000000000,
            shopAddress: ' ',
            categoryName: ' ',
            sortByPrice: check.key === '1' ? 1 : -1,
          }),
        },
      });
    }
  };
  const dataQuery = {
    price: value !== 0 ? value * 1000000 : 1000000000,
    shopAddress: name ? name : ' ',
    categoryName: titleCategory ? titleCategory : nameCate ? nameCate : ' ',
    sortByPrice: check.key === '1' ? 1 : -1,
  };

  if (check.key === '1') {
    if (idProvince || idCate || value) {
      useEffect(() => {
        dispatch({
          type: actions.FILTER_PRODUCT,
          body: {searchInfo: JSON.stringify(dataQuery)},
        });
      }, [check.key]);
    } else {
      useEffect(() => {
        if (titleCategory) {
          dispatch({
            type: actions.FILTER_PRODUCT,
            body: {
              searchInfo: JSON.stringify({
                price: 1000000000,
                shopAddress: ' ',
                categoryName: titleCategory,
                sortByPrice: check.key === '1' ? 1 : -1,
              }),
            },
          });
        } else {
          dispatch({
            type: actions.FILTER_PRODUCT,
            body: {
              searchInfo: JSON.stringify({
                price: 1000000000,
                shopAddress: ' ',
                categoryName: ' ',
                sortByPrice: check.key === '1' ? 1 : -1,
              }),
            },
          });
        }
      }, [check.key]);
    }
  } else {
    if (idProvince || idCate || value) {
      useEffect(() => {
        dispatch({
          type: actions.FILTER_PRODUCT,
          body: {searchInfo: JSON.stringify(dataQuery)},
        });
      }, [check.key]);
    } else {
      useEffect(() => {
        if (titleCategory) {
          dispatch({
            type: actions.FILTER_PRODUCT,
            body: {
              searchInfo: JSON.stringify({
                price: 1000000000,
                shopAddress: ' ',
                categoryName: titleCategory,
                sortByPrice: check.key === '1' ? 1 : -1,
              }),
            },
          });
        } else {
          dispatch({
            type: actions.FILTER_PRODUCT,
            body: {
              searchInfo: JSON.stringify({
                price: 1000000000,
                shopAddress: ' ',
                categoryName: ' ',
                sortByPrice: check.key === '1' ? 1 : -1,
              }),
            },
          });
        }
      }, [check.key]);
    }
  }

  const onSortEvent = () => {
    dispatch({
      type: actions.FILTER_PRODUCT,
      body: {searchInfo: JSON.stringify(dataQuery)},
    });
    refRBSheet.current.close();
  };

  const saleProducts = product?.filter(
    v => moment(v?.saleStart) <= Date.now() && Date.now() <= moment(v?.saleEnd),
  );
  const data = tag === '0' ? saleProducts : product;

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

  return (
    <Block flex>
      <Header title={title ? title : 'Sản phẩm'} canGoBack checkBackground />
      <>
        <SortComponent
          idProvince={idProvince}
          idCate={idCate}
          price={value}
          refRBSheet={refRBSheet}
          check={check}
          setCheck={setCheck}
          titleCategorySub={titleCategorySub}
        />
      </>
      <>
        {isLoading && (
          <Dialoading
            Modaling={[modalVisible, setModalVisible]}
            title="Chờ trong giây lát..."
          />
        )}
      </>
      <FlatList
        ListHeaderComponent={
          titleCategory || titleCategorySub ? (
            <Block paddingHorizontal={10} paddingVertical={20}>
              <Text fontType={'bold'} size={18}>
                {titleCategory ? titleCategory : titleCategorySub}
              </Text>
            </Block>
          ) : null
        }
        numColumns={2}
        data={titleCategorySub ? productSub : data}
        renderItem={_renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.5}
        removeClippedSubviews={true}
        contentContainerStyle={{paddingBottom: bottom}}
        refreshing={refreshing}
      />

      <RBSheetEvent
        idProvince={idProvince}
        nameProvice={name}
        idCate={idCate}
        nameCate={nameCate}
        refRBSheet={refRBSheet}
        value={value}
        setValue={setValue}
        onPress={onRefresh}
        onPressSort={onSortEvent}
        checkCategory={titleCategory}
      />
    </Block>
  );
};

export default ListProducts;
