import {Block, Button, Header, Text} from '@components';
import actions from '@redux/actions';
import {theme} from '@theme';
import React, {useState} from 'react';
import {ScrollView, Modal} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';
import ItemEvent from '../components/ItemEvent';
import {Toast} from '@utils/helper';
import {SkypeIndicator} from 'react-native-indicators';
import {height, width} from '@utils/responsive';

const SalesInformationSettings = ({route}) => {
  const {addressData} = route.params || {};
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.salesInquiry?.isLoading);
  const user = useSelector(state => state.tokenUser?.data);
  const [shopName, setShopName] = useState();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [street, setStreet] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const lengthName = shopName?.length ? shopName?.length + '/30' : '0/30';

  const validateEmail = email => {
    const emailFormat =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailFormat.test(String(email).toLowerCase());
  };

  function telephoneCheck(str) {
    var patt = new RegExp(
      /^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/,
    );
    return patt.test(str);
  }

  const onPress = () => {
    navigation.navigate(routes.ADDRESSING);
  };

  const _onSubmit = () => {
    if (
      shopName === '' ||
      fullName === '' ||
      email === '' ||
      phoneNumber === '' ||
      street === '' ||
      !addressData?.province?.name ||
      !addressData?.district?.name ||
      !addressData?.ward?.name
    ) {
      Toast('Vui lòng nhập đầy đủ các trường');
    } else if (fullName?.length <= 8) {
      Toast('Vui lòng đúng họ và tên');
    } else if (!validateEmail(email) || email?.length <= 12) {
      Toast('Email không hợp lệ');
    } else if (!telephoneCheck(phoneNumber)) {
      Toast('Số điện thoại không đúng định dạng');
    } else if (street?.length <= 8) {
      Toast('Hãy nhập đầy đủ tên đường');
    } else {
      const request = {
        userId: user,
        shopName: shopName,
        registerName: fullName,
        email: email,
        phone: phoneNumber,
        deliveryAddress: {
          province: addressData?.province?.name,
          district: addressData?.district?.name,
          ward: addressData?.ward?.name,
          street: street,
        },
      };
      dispatch({
        type: actions.SELLER_SEND_INQUIRY,
        body: {
          requestInfo: JSON.stringify(request),
        },
      });
    }
  };

  return (
    <Block flex backgroundColor={theme.colors.background}>
      <Header checkBackground canGoBack title="Cài đặt thông tin" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <>
          {isLoading && (
            <Modal
              animationType="fade"
              transparent={true}
              onShow={() => setModalVisible(modalVisible)}>
              <Block
                backgroundColor={theme.colors.black}
                paddingVertical={15}
                paddingHorizontal={10}
                radius={10}
                absolute
                top={height / 3}
                left={width / 3}>
                <SkypeIndicator size={50} color={theme.colors.paleGreen} />
                <Text color={theme.colors.white}>Chờ vài giây...</Text>
              </Block>
            </Modal>
          )}
        </>

        <Block marginVertical={18}>
          <Text
            size={16}
            fontType="semibold"
            color={theme.colors.holder}
            paddingHorizontal={12}
            marginBottom={8}>
            Liên hệ
          </Text>
          <ItemEvent
            style={styles.marginInput}
            characterCount={lengthName}
            placeholder="Tên shop"
            onChangeText={text => setShopName(text)}
            maxLength={30}
          />
          <ItemEvent
            style={styles.marginInput}
            placeholder="Họ và tên"
            onChangeText={text => setFullName(text)}
          />
          <ItemEvent
            style={styles.marginInput}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={text => setEmail(text)}
          />
          <ItemEvent
            placeholder="Số điện thoại"
            keyboardType="phone-pad"
            onChangeText={text => setPhoneNumber(text)}
            maxLength={10}
          />
        </Block>

        <Block>
          <Text
            size={16}
            fontType="semibold"
            color={theme.colors.holder}
            paddingHorizontal={12}
            marginBottom={8}>
            Địa chỉ lấy hàng
          </Text>
          <ItemEvent
            onPress={onPress}
            style={styles.marginInput}
            placeholder="Tỉnh/Thành phố"
            iconForward
            editable
            value={addressData?.province?.name}
          />
          <ItemEvent
            onPress={onPress}
            style={styles.marginInput}
            placeholder="Quận/Huyện"
            iconForward
            editable
            value={addressData?.district?.name}
          />
          <ItemEvent
            onPress={onPress}
            style={styles.marginInput}
            placeholder="Phường/Xã"
            iconForward
            editable
            value={addressData?.ward?.name}
          />
          <ItemEvent
            style={styles.marginInput}
            placeholder="Tên đường"
            onChangeText={text => setStreet(text)}
          />
        </Block>
      </ScrollView>

      <Button
        disabled={isLoading}
        title="ĐĂNG KÝ"
        height={45}
        style={styles.button}
        shadow
        elevation={6}
        onPress={_onSubmit}
      />
    </Block>
  );
};

export default SalesInformationSettings;
