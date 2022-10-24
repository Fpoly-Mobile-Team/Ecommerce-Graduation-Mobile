import {lottie} from '@assets';
import {Block, Empty} from '@components';
import ItemNotification from '@components/Common/ItemList/ItemNotification';
import {routes} from '@navigation/routes';
import {useIsFocused, useNavigation} from '@react-navigation/core';
import actions from '@redux/actions';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import moment from 'moment';
import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const SystemNotifications = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const notifications = useSelector(state => state.notifications?.data);
  const focus = useIsFocused();
  const user = useSelector(state => state.tokenUser?.data);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({type: actions.GET_NOTIFICATIONS});
    }, 7000);
    return () => clearInterval(interval);
  }, [dispatch]);

  const renderItem = ({item, index}) => (
    <ItemNotification
      title={item.title}
      content={item.content}
      time={moment(item.sendDate).format('hh: mm, DD/MM/YYYY')}
      images={item.images}
      onPress={() => {
        dispatch({
          type: actions.POST_READ_NOTIFICATION,
          body: {
            user: user,
            idNotification: item._id,
          },
        });
        dispatch({type: actions.GET_NOTIFICATIONS});
        navigation.navigate(routes.DETAILED_NOTICE, {item});
      }}
      hasChecked={item.hasChecked}
    />
  );

  return (
    <Block flex backgroundColor={theme.colors.white}>
      {notifications?.length ? (
        <FlatList
          data={notifications}
          renderItem={renderItem}
          keyExtractor={item => item._id.toString()}
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

export default SystemNotifications;
