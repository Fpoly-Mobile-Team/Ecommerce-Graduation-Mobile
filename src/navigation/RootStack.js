import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {common} from '@screens/Common';
import React from 'react';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {bottom} from '../screens/Bottom';
import BottomTabNavigation from './BottomTabNavigation';
import {navigate} from './RootNavigation';
import {routes} from './routes';

const Stack = createStackNavigator();

const RootStack = () => {
  const config = useSelector(state => state.config?.data);
  return (
    <NavigationContainer ref={navigate}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      {config && (
        <Stack.Navigator
          mode="modal"
          initialRouteName={routes.ADDRESSCREENS}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name={routes.BOTTOMTABBAR}
            component={BottomTabNavigation}
          />
          <Stack.Screen
            name={routes.PRODUCT_DETAILS}
            component={common.PRODUCT_DETAILS}
          />
          <Stack.Screen
            name={routes.CARTSCREENS}
            component={common.CARTSCREENS}
          />
          <Stack.Screen
            name={routes.SEARCHSCREEN}
            component={bottom.SEARCHSCREEN}
          />
          <Stack.Screen
            name={routes.ORDERHISTORY}
            component={bottom.ORDERHISTORY}
          />
          <Stack.Screen
            name={routes.ORDERDETAILS}
            component={bottom.ORDERDETAILS}
          />
          <Stack.Screen
            name={routes.PAYMENTSCREEN}
            component={common.PAYMENT_SCREEN}
          />
          <Stack.Screen
            name={routes.ADDRESSCREENS}
            component={common.ADDRESSCREENS}
          />
          <Stack.Screen
            name={routes.ADD_ADDRESS}
            component={common.ADD_ADDRESS}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default RootStack;
