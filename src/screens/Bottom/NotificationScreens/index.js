import {Block, Header} from '@components';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FlatList} from 'react-native';
import ItemNotification from '@components/Common/ItemList/ItemNotification';
import {data} from './components/data';

const NotificationScreens = () => {
  const navigation = useNavigation();

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
    <Block flex>
      <Header title="Thông Báo" />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </Block>
  );
};

export default NotificationScreens;
