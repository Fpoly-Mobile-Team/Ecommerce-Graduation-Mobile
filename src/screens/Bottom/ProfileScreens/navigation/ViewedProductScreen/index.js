import {lottie} from '@assets';
import {Block, Empty, Header} from '@components';
import ItemProduct from '@components/Common/ItemList/ItemProduct';
import {useIsFocused} from '@react-navigation/native';
import actions from '@redux/actions';
import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';

const ViewedProductScreen = ({route}) => {
  const {title} = route.params || {};
  const dispatch = useDispatch();
  const data = useSelector(state => state.productViewed?.data);
  const user = useSelector(state => state.tokenUser?.data);
  const focus = useIsFocused();

  useEffect(() => {
    if (focus) {
      dispatch({type: actions.GET_PRODUCT_VIEWED, user});
    }
  }, [dispatch, focus, user]);

  const _renderItem = ({item, index}) => {
    return (
      <ItemProduct
        key={index}
        style={styles.style_item(index)}
        images={item.images[0]}
        nameProduct={item.name}
        price={item.price}
        productSold={item.productSold}
        sellOff={item.sellOff}
        _id={item._id}
      />
    );
  };

  const renderEmptyContainer = () => {
    return <Empty lottie={lottie.emptyCategory} content="Danh sách rỗng!" />;
  };

  return (
    <Block flex>
      <Header title={title} canGoBack checkBackground />
      {data && data?.length ? (
        <FlatList
          data={data}
          renderItem={_renderItem}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item._id.toString()}
        />
      ) : (
        renderEmptyContainer()
      )}
    </Block>
  );
};

export default ViewedProductScreen;
