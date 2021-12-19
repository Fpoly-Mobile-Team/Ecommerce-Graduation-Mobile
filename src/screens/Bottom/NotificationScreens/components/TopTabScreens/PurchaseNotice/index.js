import {lottie} from '@assets';
import {Block, Empty} from '@components';
import ItemNotification from '@components/Common/ItemList/ItemNotification';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import actions from '@redux/actions';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import moment from 'moment';
import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const PurchaseNotice = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector(state => state.tokenUser?.data);
  const notice = useSelector(state => state.notificationsOrder?.data);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({type: actions.GET_NOTIF_ORDER, user});
    }, 7000);
    return () => clearInterval(interval);
  }, [dispatch, user]);

  const renderItem = ({item, index}) => (
    <ItemNotification
      title={item.title}
      content={item.content}
      time={moment(item.sendDate).format('hh: mm, DD/MM/YYYY')}
      images={item.images}
      index={index}
      onPress={() => navigation.navigate(routes.DETAILED_NOTICE, {item})}
    />
  );

  return (
    <Block flex backgroundColor={theme.colors.white}>
      {notice?.length ? (
        <FlatList
          data={notice}
          renderItem={renderItem}
          keyExtractor={item => item?._id?.toString()}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Empty
          lottie={lottie.emptyReview}
          content="Không có thông báo"
          imageStyles={{width: getSize.s(220), height: getSize.s(220)}}
        />
      )}
    </Block>
  );
};

export default PurchaseNotice;
