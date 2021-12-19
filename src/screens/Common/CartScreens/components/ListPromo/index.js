import {images} from '@assets';
import {Block} from '@components';
import ItemPromoCart from '@components/Common/ItemList/ItemPromoCart';
import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@redux/actions';
import {SkypeIndicator} from 'react-native-indicators';
import {theme} from '@theme';
import {reverseString} from '@utils/needed';

const ListItem = ({isClosed}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.tokenUser?.data);
  const myvoucher = useSelector(state => state.getmyVoucher?.data);
  const isLoading = useSelector(state => state.getmyVoucher?.isLoading);

  const [selectedId, setSelectedId] = useState(null);
  useEffect(() => {
    dispatch({
      type: actions.GET_MY_VOUCHER,
      user,
    });
  }, [user, dispatch]);

  const _onPress = () => {
    isClosed.current.close();
  };

  const renderItem = ({item, index}) => {
    return (
      <ItemPromoCart
        title={item.content}
        cod={reverseString(item._id)}
        time={item.expireDate}
        discount={
          item?.discountType === 'VNĐ'
            ? item?.discount / 1000 + 'K'
            : item?.discount * 100
        }
        discountType={item.discountType}
        onPress={_onPress}
      />
    );
  };

  return (
    <Block flex paddingHorizontal={12} paddingTop={15}>
      {!isLoading ? (
        <FlatList
          data={myvoucher}
          renderItem={renderItem}
          keyExtractor={(_, index) => String(index)}
          extraData={selectedId}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <SkypeIndicator size={50} color={theme.colors.pink} />
      )}
    </Block>
  );
};
export default ListItem;
