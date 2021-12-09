import {icons} from '@assets';
import {Block, Button, Header, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React, {useRef, useState, useEffect} from 'react';
import {Image, Platform, Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BottomSheet from './components/BottomSheet';
import ListCart from './components/ListItem';
import styles from './styles';
import {useSelector, useDispatch} from 'react-redux';
import Storage from '@utils/storage';
import {Currency, Toast} from '@utils/helper';

const CartScreen = () => {
  const refRBSheet = useRef();
  const navigation = useNavigation();
  const {bottom} = useSafeAreaInsets();
  const [dataCart, setDataCart] = useState([]);
  const [dataselected, setDataSelected] = useState([]);
  const focus = useIsFocused();
  const priceAll = () => {
    let sum = 0;
    dataselected.forEach(p => {
      sum += p.price * p.quantity * (1 - p.product.sellOff);
    });
    return sum;
  };
  useEffect(() => {
    if (focus) {
      setTimeout(() => {
        Storage.getItem('CART').then(value => {
          if (value) {
            setDataCart(value);
          }
        });
      }, 2000);

      // Storage.removeItem('CART');
    }
  }, [focus]);
  const filterShop = () => {
    let arr = [];
    let check = [];
    let shopId;
    for (let index = 0; index < dataselected.length; index++) {
      const element = dataselected[index];
      shopId = dataselected[0].product.shopId;
      arr.push(element.product.shopId);
    }
    if (arr) {
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element === shopId) {
          check.push(element);

          console.log('shop2', element);
        }
      }
      if (arr.length === check.length) {
        return true;
      } else {
        return false;
      }
    }
  };
  const onPress = () => {
    if (dataselected.length === 0) {
      Toast('Vui lòng chọn sản phẩm ');
    } else {
      if (filterShop()) {
        navigation.navigate(routes.PAYMENTSCREEN, {
          refRBSheet,
          data: dataselected,
          type: 'CART',
        });
      } else {
        Toast('Bạn chỉ có thể thanh toán cùng một cửa hàng');
      }
    }
  };

  return (
    <Block flex>
      <Header checkBackground canGoBack title="Giỏ hàng của tôi" />
      <ListCart
        data={dataCart}
        dataselected={[dataselected, setDataSelected]}
        setDataCart={setDataCart}
      />
      {dataCart.length > 0 && (
        <Block
          paddingHorizontal={12}
          paddingBottom={Platform.OS === 'ios' ? bottom : 20}>
          <Block height={0.5} backgroundColor={theme.colors.smoke} />
          <Block backgroundColor={theme.colors.white} radius={5}>
            <Block row alignCenter padding={16} space="between">
              <Block row alignCenter>
                <Image
                  source={icons.gift_voucher}
                  style={{
                    width: getSize.s(24),
                    height: getSize.s(24),
                    tintColor: theme.colors.pink,
                  }}
                  resizeMode="contain"
                />
                <Text marginLeft={5}>Voucher</Text>
              </Block>
              <Pressable onPress={() => refRBSheet.current.open()}>
                <Block row alignCenter>
                  <Text marginRight={5} color={theme.colors.lightGray}>
                    Chọn hoặc nhập mã
                  </Text>
                  <Image
                    source={icons.arrow_right}
                    style={{
                      width: getSize.s(12),
                      height: getSize.s(12),
                      tintColor: theme.colors.placeholder,
                    }}
                    resizeMode="contain"
                  />
                </Block>
              </Pressable>
            </Block>
            <Block height={0.5} backgroundColor={theme.colors.lightGray} />
            <Block padding={16}>
              <Text size={16} marginBottom={5} fontType="semibold">
                Tổng cộng
              </Text>
              <Block row alignCenter space="between">
                <Text color={theme.colors.pink} size={18} fontType="bold">
                  {Currency(priceAll())}
                </Text>
                <Button
                  height={35}
                  title="Thanh toán"
                  style={styles.btn}
                  onPress={onPress}
                />
              </Block>
            </Block>
          </Block>
        </Block>
      )}

      <BottomSheet refRBSheet={refRBSheet} />
    </Block>
  );
};

export default CartScreen;
