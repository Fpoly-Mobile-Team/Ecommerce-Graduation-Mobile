import {lottie} from '@assets';
import {Block, Empty, Text} from '@components';
import ItemOderHistory from '@components/Common/ItemList/ItemOrderHistory';
import actions from '@redux/actions';
import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getSize} from '@utils/responsive';
import {reverseString} from '@utils/needed';

const TabScreen = ({status}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.historyOrder?.data);
  const dataCancel = useSelector(state => state.historyOrderCancel?.data);
  const dataDelivering = useSelector(
    state => state.historyOrderDelivering?.data,
  );
  const dataWaiting = useSelector(state => state.historyOrderWaiting.data);
  const isLoadingSuccess = useSelector(state => state.historyOrder?.isLoading);
  const isLoadingCancel = useSelector(
    state => state.historyOrderCancel?.isLoading,
  );
  const isLoadingDelivering = useSelector(
    state => state.historyOrderDelivering?.isLoading,
  );
  const isLoadingWaiting = useSelector(
    state => state.historyOrderWaiting.isLoading,
  );
  const user = useSelector(state => state.tokenUser?.data);
  const indexend = DATA?.length - 1;

  const renderItem = ({item, index}) => {
    return (
      <ItemOderHistory
        _id={reverseString(item._id)}
        date={item.purchaseDate}
        shop={item.shopInfo?.shopName}
        quantity={item.product?.length}
        price={item.totalPrice}
        status={item.status}
        isCheck={index === indexend}
        item={item}
      />
    );
  };
  let statuss =
    status === 'Đang xử lý'
      ? 'Chờ nhận đơn'
      : status === 'Đang giao'
      ? 'Đang vận chuyển'
      : status === 'Giao thành công'
      ? 'Đã giao'
      : 'Bị hủy';

  let action =
    status === 'Đang xử lý'
      ? actions.GET_HISTORY_ORDER_WAITING
      : status === 'Đang giao'
      ? actions.GET_HISTORY_ORDER_DELIVERING
      : status === 'Giao thành công'
      ? actions.GET_HISTORY_ORDER
      : actions.GET_HISTORY_ORDER_CANCEL;

  let DATA =
    status === 'Đang xử lý'
      ? dataWaiting
      : status === 'Đang giao'
      ? dataDelivering
      : status === 'Giao thành công'
      ? data
      : dataCancel;
  let isLoading =
    status === 'Đang xử lý'
      ? isLoadingWaiting
      : status === 'Đang giao'
      ? isLoadingDelivering
      : status === 'Giao thành công'
      ? isLoadingSuccess
      : isLoadingCancel;
  useEffect(() => {
    dispatch({
      type: action,
      params: {userId: user, status: statuss, sortByDate: -1},
    });
  }, [action, dispatch, statuss, user]);

  return (
    <Block flex backgroundColor="background">
      {!isLoading ? (
        <>
          {DATA?.length > 0 ? (
            <FlatList
              data={DATA}
              renderItem={renderItem}
              contentContainerStyle={{
                paddingHorizontal: getSize.m(16),
                paddingBottom: getSize.m(8),
              }}
              keyExtractor={(item, index) => item._id.toString()}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <Block flex justifyCenter alignCenter>
              {status === 'Đang xử lý' ? (
                <Text size={16}>Đơn hàng đang xử lý không có</Text>
              ) : status === 'Đang giao' ? (
                <Text size={16}>Đơn hàng đang giao không có</Text>
              ) : status === 'Giao thành công' ? (
                <Text size={16}>Chưa có đơn hàng đã giao</Text>
              ) : (
                <Text size={16}>Bạn chưa hủy đơn hàng nào</Text>
              )}
            </Block>
          )}
        </>
      ) : (
        <Empty lottie={lottie.load_more} />
      )}
    </Block>
  );
};

export default TabScreen;
