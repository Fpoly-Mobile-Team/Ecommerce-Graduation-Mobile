import {Block, Header} from '@components';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {bottom} from '@screens/Bottom';
import {theme} from '@theme';
import React from 'react';
import Customing from './components/Customing';

const NotificationScreens = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Block flex backgroundColor={theme.colors.white}>
      <Header title="Thông báo" />
      <Tab.Navigator
        lazy={true}
        optimizationsEnabled={true}
        tabBar={props => <Customing {...props} />}>
        <Tab.Screen name="Hệ thống" component={bottom.SYSTEM_NOTIFICATIONS} />
        <Tab.Screen name="Đơn hàng" component={bottom.PURCHASE_NOTICE} />
      </Tab.Navigator>
    </Block>
  );
};

export default NotificationScreens;
