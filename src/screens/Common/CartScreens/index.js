import {CircleBack} from '@assets/svg/common';
import {Block, Button, Header, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import React, {useRef} from 'react';
import {Pressable, TextInput} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import ListCart from './components/ListItem';
import ListPromo from './components/ListPromo';
import styles from './styles';

const CartScreen = () => {
  const refRBSheet = useRef();
  const navigation = useNavigation();

  return (
    <Block flex>
      <Header checkBackground canGoBack title="Giỏ hàng của tôi" />
      <ListCart />
      <Block paddingBottom={20}>
        <Block style={styles.promo}>
          <Block style={styles.input}>
            <Text color={theme.colors.lightGray}>Chọn mã khuyến mãi</Text>
            <Pressable
              style={styles.next}
              onPress={() => refRBSheet.current.open()}>
              <CircleBack />
            </Pressable>
          </Block>
        </Block>
        <Block style={styles.amount}>
          <Text color={theme.colors.gray} size={16}>
            Tổng tiền:
          </Text>
          <Text color={theme.colors.black} size={18} fontType="semibold">
            124.000 VND
          </Text>
        </Block>
        <Block style={styles.buttonGroup}>
          <Button
            title="Quay lại"
            titleStyle={{color: theme.colors.black}}
            style={styles.btnOutline}
            height={40}
            onPress={() => navigation.goBack()}
          />
          <Button
            height={40}
            title="Thay đổi địa chỉ"
            style={styles.btnRounded}
          />
        </Block>
        <Block paddingHorizontal={12}>
          <Button
            title="THANH TOÁN"
            height={50}
            style={styles.btnCheck}
            onPress={() =>
              navigation.navigate(routes.PAYMENTSCREEN, {
                refRBSheet,
              })
            }
          />
        </Block>
      </Block>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        dragFromTopOnly={true}
        customStyles={{
          draggableIcon: {
            backgroundColor: theme.colors.dark,
            width: 100,
          },
          container: {
            height: '70%',
            backgroundColor: theme.colors.lightRount,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}>
        <Block style={styles.promo} marginBottom={5} marginTop={20}>
          <TextInput
            placeholder="Tìm kiếm mã khuyến mãi.."
            backgroundColor={theme.colors.white}
            style={styles.input}
          />
        </Block>
        <Text size={18} fontType="bold" paddingHorizontal={10}>
          Mã khuyến mãi của bạn
        </Text>
        <ListPromo isClosed={refRBSheet} />
      </RBSheet>
    </Block>
  );
};

export default CartScreen;
