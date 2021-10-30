import {Block, Header, Text, Empty} from '@components';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FlatList} from 'react-native';
import ItemNotification from '@components/Common/ItemList/ItemNotification';
import {data} from './components/data';
import {theme} from '@theme';
import {useSelector} from 'react-redux';
import {lottie} from '@assets';
import {routes} from '@navigation/routes';

const NotificationScreens = () => {
  const navigation = useNavigation();
  const user = useSelector(state => state.tokenUser?.data);
  const onPress = () =>{navigation.navigate(routes.PROFILESCREENS)}
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
          contentMore="Đăng nhập ngay" onPress={onPress}
          // onPress={() => navigation.navigate(routes.PROFILESCREENS)}
          // onPress={() => console.log('ádasdasdasd')}
        />
      )}
    </Block>
  );
};

export default NotificationScreens;
