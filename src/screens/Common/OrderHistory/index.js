import {Block, Header, Text} from '@components';
import React, {useRef} from 'react';
import DeliveringTab from './components/DeliveringTab';
import DeliveredTab from './components/DeliveredTab';
import Canceled from './components/Canceled';
import TabBar from './components/TabBar';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const OrderHistory = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Block flex>
      <Header checkBackground canGoBack title="Lịch sử đặt hàng" />

      <Tab.Navigator tabBar={props => <TabBar {...props} />}>
        <Tab.Screen name="Đang giao" component={DeliveringTab} />
        <Tab.Screen name="Đã giao" component={DeliveredTab} />
        <Tab.Screen name="Hủy" component={Canceled} />
      </Tab.Navigator>
    </Block>
  );
};

export default OrderHistory;
