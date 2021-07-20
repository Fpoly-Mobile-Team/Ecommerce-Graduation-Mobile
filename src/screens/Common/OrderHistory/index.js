import {Block, Header} from '@components';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {DATA} from './components/data';
import TabScreen from './components/TabScreen';
import TabBar from './components/TabScreen/CustomTabBar';

const OrderHistory = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Block flex>
      <Header checkBackground canGoBack title="Lịch sử đặt hàng" />
      <Tab.Navigator lazy tabBar={props => <TabBar {...props} />}>
        {DATA.map((item, index) => {
          return (
            <Tab.Screen key={index} name={item.title}>
              {() => <TabScreen />}
            </Tab.Screen>
          );
        })}
      </Tab.Navigator>
    </Block>
  );
};

export default OrderHistory;
