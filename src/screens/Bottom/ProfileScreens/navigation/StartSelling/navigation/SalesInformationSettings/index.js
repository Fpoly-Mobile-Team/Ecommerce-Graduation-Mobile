import {Block, Button, Dialoading, Header} from '@components';
import actions from '@redux/actions';
import {theme} from '@theme';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {Toast} from '@utils/helper';
import SalesForm from './../components/SalesForm';
import {validEmail, validPhone} from '@utils/validation';

const SalesInformationSettings = ({route}) => {
  const {addressData} = route.params || {};
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.salesInquiry?.isLoading);
  const user = useSelector(state => state.tokenUser?.data);
  const [shopName, setShopName] = useState();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [street, setStreet] = useState();
  const [modalVisible, setModalVisible] = useState(false);

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
      Toast('Vui lòng nhập đúng họ và tên');
    } else if (!validEmail(email) || email?.length <= 12) {
      Toast('Email không hợp lệ');
    } else if (!validPhone(phoneNumber)) {
      Toast('Số điện thoại không đúng định dạng');
    } else if (street?.length < 6) {
      Toast('Vui lòng nhập chính xác tên đường');
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
            <Dialoading
              Modaling={[modalVisible, setModalVisible]}
              title="Chờ trong giây lát..."
            />
          )}
        </>
        <SalesForm
          ShopName={[shopName, setShopName]}
          FullName={[fullName, setFullName]}
          Email={[email, setEmail]}
          PhoneNumber={[phoneNumber, setPhoneNumber]}
          Street={[street, setStreet]}
          addressData={addressData}
        />
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
