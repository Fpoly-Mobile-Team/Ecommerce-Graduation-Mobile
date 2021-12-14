import {lottie} from '@assets';
import {Block, Empty, Header} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {bottom} from '@screens/Bottom';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {useSelector} from 'react-redux';
import Customing from './components/Customing';

const NotificationScreens = () => {
  const Tab = createMaterialTopTabNavigator();
  const navigation = useNavigation();
  const user = useSelector(state => state.tokenUser?.data);

  const onPress = () => {
    navigation.navigate(routes.AUTHFORSCREEN);
  };

  return (
    <Block flex backgroundColor={theme.colors.white}>
      <Header title="Thông báo" />
      {!user ? (
        <Empty
          lottie={lottie.notifications}
          content="Đăng nhập để sử dụng tính năng..."
          contentMore="Đăng nhập ngay"
          imageStyles={{width: getSize.s(190), height: getSize.s(190)}}
          onPress={onPress}
        />
      ) : (
        <Tab.Navigator
          lazy={true}
          optimizationsEnabled={true}
          tabBar={props => <Customing {...props} />}>
          <Tab.Screen name="Hệ thống" component={bottom.SYSTEM_NOTIFICATIONS} />
          <Tab.Screen name="Đơn hàng" component={bottom.PURCHASE_NOTICE} />
        </Tab.Navigator>
      )}
    </Block>
  );
};

export default NotificationScreens;
