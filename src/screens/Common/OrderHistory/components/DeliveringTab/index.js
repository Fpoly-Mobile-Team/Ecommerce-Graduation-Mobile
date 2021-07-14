import {Block, Text, Button} from '@components';
import {theme} from '@theme';
import React, {useRef, useState} from 'react';
import {FlatList} from 'react-native';
import ItemOderHistory from '@components/Common/ItemList/ItemOrderHistory';
const DATA = [
  {
    name: 'Order №1947034',
    date: '05-12-2019',
    shop: 'Cửa hàng thời trang 11',
    quantity: '3',
    price: '356.000',
    status: 'Đang giao',
  },
  {
    name: 'Order №1947034',
    date: '05-12-2019',
    shop: 'Cửa hàng thời trang 11',
    quantity: '3',
    price: '356.000',
    status: 'Đang giao',
  },
  {
    name: 'Order №1947034',
    date: '05-12-2019',
    shop: 'Cửa hàng thời trang 11',
    quantity: '3',
    price: '356.000',
    status: 'Đang giao',
  },
  {
    name: 'Order №1947034',
    date: '05-12-2019',
    shop: 'Cửa hàng thời trang 11',
    quantity: '3',
    price: '356.000',
    status: 'Đang giao',
  },
];
const renderItem = ({item, index}) => {
  return (
    <ItemOderHistory
      name={item.name}
      date={item.date}
      shop={item.shop}
      quantity={item.quantity}
      price={item.price}
      status={item.status}
    />
  );
};
const DeliveringTab = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <Block flex paddingTop={0} paddingHorizontal={15}>
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

export default DeliveringTab;
