import {Block, Button, Header, TextInput} from '@components';
import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import styles from './styles';

const AddAddressScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [reqpassword, setreqPassword] = useState();

  return (
    <Block flex>
      <Header checkBackground canGoBack title="Thêm địa chỉ mới" />
      <Block paddingHorizontal={12} paddingTop={10}>
        <TextInput
          label="Họ và tên"
          containerInputStyle={styles.containerInputStyle}
          labelStyle={styles.label}
          inputStyle={styles.inputStyle}
          keyboardType="email-address"
          placeholder="Nhập họ và tên"
          onChangeText={text => setName(text)}
        />
        <TextInput
          label="Số điện thoại"
          containerInputStyle={styles.containerInputStyle}
          labelStyle={styles.label}
          inputStyle={styles.inputStyle}
          keyboardType="phone-pad"
          placeholder="Nhập số điện thoại"
          onChangeText={text => setPhone(text)}
        />
        <TextInput
          label="Tỉnh/ Thành phố"
          containerInputStyle={styles.containerInputStyle}
          labelStyle={styles.label}
          inputStyle={styles.inputStyle}
          keyboardType="phone-pad"
          placeholder="Tỉnh/ Thành phố"
          onChangeText={text => setPhone(text)}
        />
        <TextInput
          label="Quận/Huyện"
          containerInputStyle={styles.containerInputStyle}
          labelStyle={styles.label}
          inputStyle={styles.inputStyle}
          keyboardType="phone-pad"
          placeholder="Quận/Huyện"
          onChangeText={text => setPhone(text)}
        />
        <TextInput
          label="Phường/Xã"
          containerInputStyle={styles.containerInputStyle}
          labelStyle={styles.label}
          inputStyle={styles.inputStyle}
          keyboardType="phone-pad"
          placeholder="Phường/Xã"
          onChangeText={text => setPhone(text)}
        />
        <TextInput
          label="Tên đường, Toà nhà, Số nhà."
          containerInputStyle={styles.containerInputStyle}
          labelStyle={styles.label}
          inputStyle={styles.inputStyle}
          keyboardType="phone-pad"
          placeholder="Tên đường, Toà nhà, Số nhà."
          onChangeText={text => setPhone(text)}
        />
      </Block>

      <Block paddingHorizontal={12}>
        <Button title="THÊM MỚI" height={45} style={styles.btnCheck} />
      </Block>
    </Block>
  );
};

export default AddAddressScreen;
