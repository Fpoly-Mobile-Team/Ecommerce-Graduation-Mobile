import {lottie} from '@assets';
import {Block, Empty, Header} from '@components';
import ItemNotification from '@components/Common/ItemList/ItemNotification';
import {routes} from '@navigation/routes';
import {useIsFocused, useNavigation} from '@react-navigation/core';
import actions from '@redux/actions';
import {theme} from '@theme';
import moment from 'moment';
import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const NotificationScreens = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector(state => state.tokenUser?.data);
  const notifications = useSelector(state => state.notifications?.data);
  const focus = useIsFocused();

  useEffect(() => {
    dispatch({type: actions.GET_NOTIFICATIONS});
  }, [dispatch]);

  const onPress = () => {
    navigation.navigate(routes.AUTHFORSCREEN);
  };
  const renderItem = ({item, index}) => (
    <ItemNotification
      title={item.title}
      content={item.content}
      ingredients={item.ingredients}
      time={moment(item.sendDate).format('hh: mm, DD/MM/YYYY')}
      images={item.images}
      index={index}
      onPress={() => navigation.navigate(routes.DETAILED_NOTICE, {item})}
    />
  );

  return (
    <Block flex backgroundColor={theme.colors.white}>
      <Header title="Thông báo" />
      {user ? (
        <FlatList
          data={notifications}
          renderItem={renderItem}
          keyExtractor={item => item._id.toString()}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Empty
          lottie={lottie.emptyNotification}
          content="Vui lòng đăng nhập để nhận thông báo!"
          contentMore="Đăng nhập ngay"
          onPress={onPress}
        />
      )}
    </Block>
  );
};

export default NotificationScreens;
