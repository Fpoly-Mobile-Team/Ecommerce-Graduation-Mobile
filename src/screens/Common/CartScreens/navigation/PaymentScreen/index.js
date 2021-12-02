import {Block, Button, Header} from '@components';
import {theme} from '@theme';
import React from 'react';
import {ScrollView, LogBox} from 'react-native';
import DeliveryAddress from './components/DeliveryAddress';
import PaymentProduct from './components/PaymentProduct';
import ShippingMethod from './components/ShippingMethod';
import PaymentMethod from './components/PaymentMethod';
import VoucherShop from './components/VoucherShop';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';

const PaymentScreen = ({route}) => {
  const navigation = useNavigation();
  const {refRBSheet} = route.params || {};
  const {data} = route.params || {};
  console.log('data-------', data);
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  return (
    <Block flex backgroundColor="background">
      <Header canGoBack checkBackground title="Thanh toán" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <DeliveryAddress />
        <PaymentProduct data={data} />
        <VoucherShop onPress={() => refRBSheet.current.open()} />
        <ShippingMethod />
        <PaymentMethod />
      </ScrollView>
      <Block paddingHorizontal={16}>
        <Button
          onPress={() => navigation.navigate(routes.PURCHASE_SCREEN)}
          title="ĐẶT HÀNG"
          height={48}
          style={{backgroundColor: theme.colors.pink}}
        />
      </Block>
    </Block>
  );
};

export default PaymentScreen;
