import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {useSelector} from 'react-redux';
import {bottom} from '../screens/Bottom';
import {auth} from './../screens/auth';
import CustomTabBar from './CustomTabBar';
import {routes} from './routes';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const user = useSelector(state => state.tokenUser?.data);
  return (
    <Tab.Navigator
      initialRouteName={routes.HOMESCREENS}
      tabBar={props => <CustomTabBar {...props} />}>
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
      {user ? (
        <Tab.Screen
          name={routes.PROFILESCREENS}
          component={bottom.PROFILESCREENS}
          options={{
            tabBarLabel: 'Tài khoản',
          }}
        />
      ) : (
        <Tab.Screen
          name={routes.AUTHFORSCREEN}
          component={auth.AUTHFORSCREEN}
          options={{
            tabBarLabel: 'Tài khoản',
          }}
        />
      )}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
