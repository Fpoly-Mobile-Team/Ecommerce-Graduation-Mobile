import {Block, Empty} from '@components';
import ItemMessage from '@components/Common/ItemList/ItemMessage';
import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {lottie} from '@assets';

import {useSelector} from 'react-redux';
import {routes} from '@navigation/routes';

const DATA = [
  {
    id: '1',
    name: 'Gucci',
    img: 'assets/images/avatar.jpg',
    mess: 'This message to customer service...',
    status: 'Vừa xong',
  },
  {
    id: '2',
    name: 'Hồng Hà Shop',
    img: 'assets/images/avatar.jpg',
    mess: 'This message to customer service...',
    status: 'Hôm qua',
  },
  {
    id: '3',
    name: 'Dirty Coin',
    img: 'assets/images/avatar.jpg',
    mess: 'This message to customer service...',
    status: 'Thứ 6',
  },
  {
    id: '4',
    name: 'FM Style',
    img: 'assets/images/avatar.jpg',
    mess: 'This message to customer service...',
    status: '15 Th12',
  },
];
const indexend = 0;
const renderItem = ({item, index}) => {
  return (
    <ItemMessage
      name={item.name}
      mess={item.mess}
      status={item.status}
      isCheck={indexend === index}
    />
  );
};

const ListMess = () => {
  const [selectedId, setSelectedId] = useState(null);
  const navigation = useNavigation();
  const user = useSelector(state => state.tokenUser?.data);
  const onPress = () => {
    navigation.navigate(routes.AUTHFORSCREEN);
  };
  return (
    <Block flex>
      {user ? (
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Empty
          lottie={lottie.emptyMessager}
          content="Vui lòng đăng nhập để sử dụng tin nhắn!"
          contentMore="Đăng nhập ngay"
          onPress={onPress}
          imageStyles={{width: 200, height: 200}}
        />
      )}
    </Block>
  );
};
export default ListMess;
