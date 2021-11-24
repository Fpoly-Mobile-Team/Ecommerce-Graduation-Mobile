import {Block, TextInput} from '@components';
import React from 'react';
import {Pressable} from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';

const FormEditInput = ({showDatePicker, Username, Birthday, Phone, Email}) => {
  const userInfo = useSelector(state => state.userInfo?.data);
  const parseDateToStringDMY = d => {
    if (d === undefined || d === null) {
      return '';
    }
    if (typeof d === 'string' && d.length <= 10) {
      return d;
    }
    const dateRs = new Date(d);
    const month = (dateRs.getMonth() + 1).toString().padStart(2, '0');
    return dateRs.getDate() + '/' + month + '/' + dateRs.getFullYear();
  };

  const [username, setUsername] = Username;
  const [birthday, setBirthday] = Birthday;
  const [phone, setPhone] = Phone;
  const [email, setEmail] = Email;

  return (
    <Block paddingHorizontal={12}>
      <TextInput
        label="Họ và tên"
        containerInputStyle={styles.containerInputStyle}
        labelStyle={styles.label}
        inputStyle={styles.inputStyle}
        placeholder="Nhập họ và tên"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <Pressable
        onPress={() => {
          showDatePicker();
        }}>
        <TextInput
          label="Ngày sinh"
          containerInputStyle={styles.containerInputStyle}
          labelStyle={styles.label}
          inputStyle={styles.inputStyle}
          keyboardType="number-pad"
          placeholder="dd/mm/yyyy"
          onChangeText={text => setBirthday(text)}
          value={parseDateToStringDMY(birthday)}
          editable={false}
        />
      </Pressable>

      <TextInput
        label="Số điện thoại"
        containerInputStyle={styles.containerInputStyle}
        labelStyle={styles.label}
        inputStyle={styles.inputStyle}
        keyboardType="number-pad"
        placeholder="Nhập số điện thoại của bạn"
        onChangeText={text => setPhone(text)}
        value={phone}
        editable={userInfo?.phone ? false : true}
      />
      <TextInput
        label="Email"
        containerInputStyle={styles.containerInputStyle}
        labelStyle={styles.label}
        inputStyle={styles.inputStyle}
        keyboardType="email-address"
        placeholder="Nhập email của bạn"
        onChangeText={text => setEmail(text)}
        value={email}
        editable={false}
      />
    </Block>
  );
};

export default FormEditInput;
