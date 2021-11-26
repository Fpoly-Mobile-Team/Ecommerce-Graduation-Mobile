import {lottie} from '@assets';
import {Block, Empty, Header} from '@components';
import ItemNotification from '@components/Common/ItemList/ItemNotification';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {data} from './components/data';

const NotificationScreens = () => {
  const navigation = useNavigation();
  const user = useSelector(state => state.tokenUser?.data);
  const onPress = () => {
    navigation.navigate(routes.AUTHFORSCREEN);
  };
  const renderItem = ({item}) => (
    <ItemNotification
      image={item.Image}
      title={item.title}
      content={item.content}
      ingredients={item.ingredients}
      time={item.time}
    />
  );

  return (
    <Block flex backgroundColor={theme.colors.white}>
      <Header title="Thông báo" />
      {user ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
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
