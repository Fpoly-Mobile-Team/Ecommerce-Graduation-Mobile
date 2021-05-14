import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routes} from './routes';
import {bottom} from '../screens/Bottom';
import CustomTabBar from './CustomTabBar';
const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name={routes.HOMESCREENS}
        component={bottom.HOMESCREENS}
        options={{
          tabBarLabel: 'Trang chủ',
        }}
      />
      <Tab.Screen
        name={routes.CATEGORYSCREENS}
        component={bottom.CATEGORYSCREENS}
        options={{
          tabBarLabel: 'Danh mục',
        }}
      />
      <Tab.Screen
        name={routes.CHATSCREENS}
        component={bottom.CHATSCREENS}
        options={{
          tabBarLabel: 'Tin nhắn',
        }}
      />
      <Tab.Screen
        name={routes.NOTIFICATIONSCREENS}
        component={bottom.NOTIFICATIONSCREENS}
        options={{
          tabBarLabel: 'Thông báo',
        }}
      />
      <Tab.Screen
        name={routes.PROFILESCREENS}
        component={bottom.PROFILESCREENS}
        options={{
          tabBarLabel: 'Cá nhân',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
