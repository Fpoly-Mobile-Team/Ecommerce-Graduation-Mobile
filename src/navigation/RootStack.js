import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {common} from '@screens/Common';
import React from 'react';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {bottom} from '../screens/Bottom';
import {auth} from './../screens/auth/';
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
            name={routes.AUTHFORSCREEN}
            component={auth.AUTHFORSCREEN}
          />
          <Stack.Screen
            name={routes.REGISTERSCREEN}
            component={auth.REGISTER_SCREEN}
          />
          <Stack.Screen
            name={routes.LOGINSCREEN}
            component={auth.LOGIN_SCREEN}
          />
          <Stack.Screen
            name={routes.FORGOTPASSWORD}
            component={auth.FORGOT_PASSWORD}
          />
          <Stack.Screen
            name={routes.PROGRAMMING_ACCOUNT_SCREEN}
            component={bottom.PROGRAMMING_ACCOUNT_SCREEN}
          />
          <Stack.Screen
            name={routes.ADDRESS_SCREEN}
            component={common.ADDRESS_SCREEN}
          />
          <Stack.Screen
            name={routes.ADD_ADDRESS_SCREEN}
            component={common.ADD_ADDRESS_SCREEN}
          />
          <Stack.Screen
            name={routes.PURCHASE_SCREEN}
            component={common.PURCHASE_SCREEN}
          />
          <Stack.Screen
            name={routes.PRODUCT_STORE}
            component={common.PRODUCT_STORE}
          />
          <Stack.Screen
            name={routes.SECURITY_SCREEN}
            component={bottom.SECURITY_SCREEN}
          />
          <Stack.Screen
            name={routes.TERM_OF_USE_SCREEN}
            component={bottom.TERM_OF_USE_SCREEN}
          />
          <Stack.Screen
            name={routes.PROMO_SCREEN}
            component={common.PROMO_SCREEN}
          />
          <Stack.Screen
            name={routes.INTRODUCE_SCREEN}
            component={bottom.INTRODUCE_SCREEN}
          />
          <Stack.Screen
            name={routes.INTRODUCE_DETAIL}
            component={bottom.INTRODUCE_DETAIL}
          />
          <Stack.Screen name={routes.CHATBOX} component={bottom.CHATBOX} />
          <Stack.Screen
            name={routes.PROFILESCREENS}
            component={bottom.PROFILESCREENS}
            name={routes.POPUP_SCREEN}
            component={common.POPUP_SCREEN}
            options={{
              animationEnabled: false,
              cardStyle: {
                backgroundColor: 'rgba(0,0,0,.4)',
              },
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default RootStack;
