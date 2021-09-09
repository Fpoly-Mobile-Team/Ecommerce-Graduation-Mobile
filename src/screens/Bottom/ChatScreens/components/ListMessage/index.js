import {Block, Text} from '@components';
import ItemMessage from '@components/Common/ItemList/ItemMessage';
import React, {useState} from 'react';
import {FlatList} from 'react-native';

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
  return (
    <Block flex>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        showsVerticalScrollIndicator={false}
      />
    </Block>
  );
};
export default ListMess;
