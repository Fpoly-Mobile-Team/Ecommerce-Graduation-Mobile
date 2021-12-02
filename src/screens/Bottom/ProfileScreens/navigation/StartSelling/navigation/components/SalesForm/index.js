import React from 'react';
import {Block, ItemEvent, Text} from '@components';
import {theme} from '@theme';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';
import styles from './styles';

const SalesForm = ({
  ShopName,
  FullName,
  Email,
  PhoneNumber,
  Street,
  addressData,
}) => {
  const [shopName, setShopName] = ShopName;
  const [fullName, setFullName] = FullName;
  const [email, setEmail] = Email;
  const [phoneNumber, setPhoneNumber] = PhoneNumber;
  const [street, setStreet] = Street;
  const lengthName = shopName?.length ? shopName?.length + '/30' : '0/30';

  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate(routes.ADDRESSING);
  };

  return (
    <Block>
      <Block marginVertical={18}>
        <Text
          size={16}
          fontType="semibold"
          color={theme.colors.black}
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
          style={styles.marginInput}
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
          color={theme.colors.black}
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
    </Block>
  );
};

export default SalesForm;
