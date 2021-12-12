import {lottie} from '@assets';
import {Block, Empty} from '@components';
import ItemOderHistory from '@components/Common/ItemList/ItemOrderHistory';
import actions from '@redux/actions';
import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

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
        name={item._id.slice(0, 10)}
        date={item.purcharseDate}
        shop={item.shopInfo?.shopName}
        quantity={item.product.length}
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
      params: {userId: user, status: statuss},
    });
  }, [action, dispatch, statuss, user]);

  return (
    <Block flex backgroundColor="background">
      {!isLoading ? (
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item, index) => item._id.toString()}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Empty lottie={lottie.emptyProductDetails} />
      )}
    </Block>
  );
};

export default TabScreen;
