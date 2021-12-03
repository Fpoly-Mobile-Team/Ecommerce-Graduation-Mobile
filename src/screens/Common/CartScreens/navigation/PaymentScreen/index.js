import {Block, Button, Header} from '@components';
import {theme} from '@theme';
import React, {useRef, useState} from 'react';
import {ScrollView, LogBox} from 'react-native';
import DeliveryAddress from './components/DeliveryAddress';
import PaymentProduct from './components/PaymentProduct';
import ShippingMethod from './components/ShippingMethod';
import PaymentMethod from './components/PaymentMethod';
import VoucherShop from './components/VoucherShop';
import {useNavigation} from '@react-navigation/native';
import BottomSheet from './components/BottomSheet';
import {routes} from '@navigation/routes';
import {getSize} from '@utils/responsive';
import {useSelector, useDispatch} from 'react-redux';
import actions from '@redux/actions';
import 'moment/locale/vi';
import moment from 'moment';

moment.locale('vi');
var date = new Date();
date.setDate(date.getDate() + 3);
var dates = new Date();
dates.setDate(dates.getDate() + 7);

const dataShip = [
  {
    method: 'Nhanh',
    priceShip: 40000,
    dateStart: moment().format('ll'),
    dateEnd: moment(date).format('ll'),
  },
  {
    method: 'Tiết kiệm',
    priceShip: 20000,
    dateStart: moment().format('ll'),
    dateEnd: moment(dates).format('ll'),
  },
];
const PaymentScreen = ({route}) => {
  const navigation = useNavigation();
  const refRBSheet = useRef();
  const dispatch = useDispatch();
  const user = useSelector(state => state.tokenUser?.data);
  const isLoading = useSelector(state => state.createOrder?.isLoading);
  const [isVisible, setIsVisible] = useState(false);
  const {data} = route.params || {};
  const [selectedIdVoucher, setSelectedIdVoucher] = useState(null);
  const [selectedMethodShip, setselectedMethodShip] = useState(dataShip[0]);

  const userInfo = useSelector(state => state.userInfo?.data);

  console.log('data-------', data);
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  const priceShip = 32000;

  const total = selectedIdVoucher
    ? selectedIdVoucher?.discount * data[0]?.price
    : 0
    ? data[0]?.price + priceShip - selectedIdVoucher
      ? selectedIdVoucher?.discount * data[0]?.price
      : 0
    : data[0]?.price + priceShip;
  const onPress = () => {
    if (selectedIdVoucher) {
      const dataOrder = {
        product: [
          {
            productId: data[0]?.product?._id,
            quantity: data[0]?.quantity,
            color: data[0]?.option ? data[0]?.option?.color : null,
          },
        ],
        userId: user,
        totalPrice: total,
        deliveryAddress: {
          receiverName: userInfo?.address?.filter(v => v.isDefault === true)[0]
            ?.full_name,
          phone: userInfo?.address?.filter(v => v.isDefault === true)[0]?.phone,
          province: userInfo?.address?.filter(v => v.isDefault === true)[0]
            ?.province,
          district: userInfo?.address?.filter(v => v.isDefault === true)[0]
            ?.district,
          ward: userInfo?.address?.filter(v => v.isDefault === true)[0]?.ward,
          street: userInfo?.address?.filter(v => v.isDefault === true)[0]
            ?.street,
        },
        deliveryMethod: selectedMethodShip?.method,
      };
      dispatch({
        type: actions.CREATE_ORDER,
        body: {orderInfo: JSON.stringify(dataOrder)},
      });
      dispatch({
        type: actions.CREATE_ORDER,
        body: {voucherId: selectedIdVoucher?._id, user},
      });
      console.log('jaja', selectedMethodShip);
    } else {
      const dataOrder = {
        product: [
          {
            productId: data[0]?.product?._id,
            quantity: data[0]?.quantity,
            color: data[0]?.option ? data[0]?.option?.color : null,
          },
        ],
        userId: user,
        totalPrice: total,
        deliveryAddress: {
          receiverName: userInfo?.address?.filter(v => v.isDefault === true)[0]
            ?.full_name,
          phone: userInfo?.address?.filter(v => v.isDefault === true)[0]?.phone,
          province: userInfo?.address?.filter(v => v.isDefault === true)[0]
            ?.province,
          district: userInfo?.address?.filter(v => v.isDefault === true)[0]
            ?.district,
          ward: userInfo?.address?.filter(v => v.isDefault === true)[0]?.ward,
          street: userInfo?.address?.filter(v => v.isDefault === true)[0]
            ?.street,
        },
        deliveryMethod: selectedMethodShip?.method,
      };
      dispatch({
        type: actions.CREATE_ORDER,
        body: {orderInfo: JSON.stringify(dataOrder)},
      });
    }
  };
  return (
    <Block flex backgroundColor="background">
      <Header canGoBack checkBackground title="Thanh toán" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <DeliveryAddress />
        <PaymentProduct data={data} />
        <VoucherShop
          title={selectedIdVoucher?.content}
          onPress={() => refRBSheet.current.open()}
        />
        <ShippingMethod
          visible={[isVisible, setIsVisible]}
          data={dataShip}
          shipMethod={[selectedMethodShip, setselectedMethodShip]}
        />
        <PaymentMethod
          priceProduct={data[0]?.price}
          priceShip={selectedMethodShip?.priceShip}
          priceVoucher={
            selectedIdVoucher ? selectedIdVoucher?.discount * data[0]?.price : 0
          }
        />
      </ScrollView>
      <Block paddingHorizontal={16} marginBottom={getSize.s(15)}>
        <Button
          disabled={isLoading}
          onPress={onPress}
          title="ĐẶT HÀNG"
          height={48}
          style={{
            backgroundColor: theme.colors.pink,
          }}
        />
      </Block>
      <BottomSheet
        idShop={data[0]?.product?.shopId}
        refRBSheet={refRBSheet}
        selectedIdVoucher={[selectedIdVoucher, setSelectedIdVoucher]}
      />
    </Block>
  );
};

export default PaymentScreen;
