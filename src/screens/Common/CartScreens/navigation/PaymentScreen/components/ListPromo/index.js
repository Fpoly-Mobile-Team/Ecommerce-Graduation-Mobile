import {images} from '@assets';
import {Block} from '@components';
import ItemPromoCart from '@components/Common/ItemList/ItemPromoCart';
import React, {useEffect} from 'react';
import {FlatList, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@redux/actions';
import {SkypeIndicator} from 'react-native-indicators';
import {theme} from '@theme';

import {Toast} from '@utils/helper';
const ListItem = ({isClosed, selectedIdVouchers, idShop}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.tokenUser?.data);
  const myvoucher = useSelector(state => state.getmyVoucher?.data);
  const isLoading = useSelector(state => state.getmyVoucher?.isLoading);
  const [selectedIdVoucher, setSelectedIdVoucher] = selectedIdVouchers;
  const voucherPromo = myvoucher?.filter(v => v.shopId === idShop);
  console.log('voucher', voucherPromo);
  useEffect(() => {
    dispatch({
      type: actions.GET_MY_VOUCHER,
      user,
    });
  }, [user, dispatch]);

  const _onPress = (item, _idVoucher) => {
    if (item?.shopId === idShop) {
      isClosed.current.close();
      setSelectedIdVoucher(item);
    } else {
      Toast('Vui lòng chọn vocher đúng với shop');
    }
  };
  const renderItem = ({item, index}) => {
    return (
      <ItemPromoCart
        title={item.content}
        cod={'#' + item._id?.toUpperCase()?.slice(0, 9)}
        time={item.expireDate}
        image={item.image}
        onPress={() => _onPress(item, item._id)}
      />
    );
  };

  return (
    <Block flex paddingHorizontal={12} paddingTop={15}>
      {!isLoading ? (
        <FlatList
          data={voucherPromo}
          renderItem={renderItem}
          keyExtractor={(_, index) => String(index)}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <SkypeIndicator size={50} color={theme.colors.pink} />
      )}
      {voucherPromo?.length < 0 && (
        <Block flex alignCenter justifyCenter>
          <Text>Bạn chưa lưu voucher của cửa hàng này</Text>
          <Text>Hãy đến cửa hàng săn nha</Text>
        </Block>
      )}
    </Block>
  );
};
export default ListItem;
