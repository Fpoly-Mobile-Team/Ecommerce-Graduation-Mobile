import {Block} from '@components';
import ItemOderHistory from '@components/Common/ItemList/ItemOrderHistory';
import React, {useState} from 'react';
import {FlatList} from 'react-native';
const DATA = [
  {
    name: 'Order №1947034',
    date: '05-12-2019',
    shop: 'Cửa hàng thời trang 11',
    quantity: '3',
    price: '356.000',
    status: 'Đã giao',
  },
  {
    name: 'Order №1947034',
    date: '05-12-2019',
    shop: 'Cửa hàng thời trang 11',
    quantity: '3',
    price: '356.000',
    status: 'Đã giao',
  },
  {
    name: 'Order №1947034',
    date: '05-12-2019',
    shop: 'Cửa hàng thời trang 11',
    quantity: '3',
    price: '356.000',
    status: 'Đã giao',
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
const TabScreen = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <Block flex paddingHorizontal={15}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => String(index)}
        extraData={selectedId}
        showsVerticalScrollIndicator={false}
      />
    </Block>
  );
};

export default TabScreen;
