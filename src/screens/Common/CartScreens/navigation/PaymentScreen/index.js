import {Block, Button, Header} from '@components';
import actions from '@redux/actions';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import moment from 'moment';
import 'moment/locale/vi';
import React, {useRef, useState} from 'react';
import {LogBox, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import BottomSheet from './components/BottomSheet';
import DeliveryAddress from './components/DeliveryAddress';
import PaymentMethod from './components/PaymentMethod';
import PaymentProduct from './components/PaymentProduct';
import ShippingMethod from './components/ShippingMethod';
import VoucherShop from './components/VoucherShop';

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
  const refRBSheet = useRef();
  const dispatch = useDispatch();
  const user = useSelector(state => state.tokenUser?.data);
  const isLoading = useSelector(state => state.createOrder?.isLoading);
  const [isVisible, setIsVisible] = useState(false);
  const {data} = route.params || {};
  const {type} = route.params || '';

  const [selectedIdVoucher, setSelectedIdVoucher] = useState(null);
  const [selectedMethodShip, setselectedMethodShip] = useState(dataShip[0]);
  console.log('voucher', selectedIdVoucher);
  const userInfo = useSelector(state => state.userInfo?.data);

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  const priceAll = () => {
    let sum = 0;
    data?.forEach(p => {
      sum += p.price * p.quantity * (1 - p.product.sellOff);
    });
    return sum;
  };
  let priceVoucher = selectedIdVoucher
    ? selectedIdVoucher?.discountType === 'Phần trăm'
      ? (selectedIdVoucher?.discount * priceAll()) / 100
      : selectedIdVoucher?.discount
    : 0;
  const total = priceVoucher
    ? priceAll() - priceVoucher + selectedMethodShip?.priceShip
    : priceAll() + selectedMethodShip?.priceShip;

  const onPress = () => {
    if (selectedIdVoucher) {
      const dataOrder = {
        product: data.map(v => {
          return {
            productId: v.product._id,
            quantity: v.quantity,
            color: v.option ? v.option : v.color ? v.color : '',
            currentPrice: v.product.price,
            currentDiscount: v.product.sellOff,
          };
        }),
        shopId: data[0]?.product?.shopId,
        userId: user,
        totalPrice: total,
        orderDiscount: selectedIdVoucher
          ? selectedIdVoucher?.discount / 100 || 0
          : 0,
        orderDiscountType: selectedIdVoucher
          ? selectedIdVoucher?.discountType || ''
          : '',
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
        body: {
          orderInfo: JSON.stringify(dataOrder),
          product: dataOrder?.product,
          shopId: data[0]?.product?.shopId,
          type: type,
        },
        price: total,
      });
      dispatch({
        type: actions.DELETE_MY_VOUCHER,
        body: {voucherId: selectedIdVoucher?._id, user},
      });
    } else {
      const dataOrder = {
        product: data.map(v => {
          return {
            productId: v.product._id,
            quantity: v.quantity,
            color: v.option ? v.option : v.color ? v.color : '',
            currentPrice: v.product.price,
            currentDiscount: v.product.sellOff,
          };
        }),
        userId: user,
        shopId: data[0]?.product?.shopId,
        totalPrice: total,
        orderDiscount: selectedIdVoucher ? selectedIdVoucher?.discount || 0 : 0,
        orderDiscountType: selectedIdVoucher
          ? selectedIdVoucher?.discountType || ''
          : 'VNĐ',
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
        body: {
          orderInfo: JSON.stringify(dataOrder),
          product: dataOrder?.product,
          shopId: data[0]?.product?.shopId,
          type: type,
        },
        price: total,
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
          priceProduct={priceAll()}
          priceShip={selectedMethodShip?.priceShip}
          priceVoucher={
            selectedIdVoucher
              ? selectedIdVoucher?.discountType === 'Phần trăm'
                ? (selectedIdVoucher?.discount * priceAll()) / 100
                : selectedIdVoucher?.discount
              : 0
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
