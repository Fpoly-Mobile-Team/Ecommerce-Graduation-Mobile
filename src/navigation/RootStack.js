import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {bottom} from '@screens/Bottom';
import React from 'react';
import {StatusBar} from 'react-native';
import BottomTabNavigation from './BottomTabNavigation';
import {navigate} from './RootNavigation';
import {routes} from './routes';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer ref={navigate}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={'transparent'}
      />
      <Stack.Navigator
        mode="modal"
        initialRouteName={routes.BOTTOMTABBAR}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={routes.BOTTOMTABBAR}
          component={BottomTabNavigation}
        />
        <Stack.Screen
          name={routes.PRODUCT_DETAILS}
          component={bottom.PRODUCT_DETAILS}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
