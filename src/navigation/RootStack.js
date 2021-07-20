import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {common} from '@screens/Common';
import React from 'react';
import {StatusBar} from 'react-native';
import BottomTabNavigation from './BottomTabNavigation';
import {navigate} from './RootNavigation';
import {routes} from './routes';
import {bottom} from '../screens/Bottom';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer ref={navigate}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <Stack.Navigator
        mode="modal"
        initialRouteName={routes.ORDERHISTORY}
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
          component={common.ORDERHISTORY}
        />
        <Stack.Screen
          name={routes.ORDERDETAILS}
          component={common.ORDERDETAILS}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
