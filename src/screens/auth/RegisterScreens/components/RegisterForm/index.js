import {Block, FormInput} from '@components';
import {getSize} from '@utils/responsive';
import React from 'react';
import styles from './styles';

const RegisterForm = ({control}) => {
  return (
    <Block paddingHorizontal={12}>
      <FormInput
        name="email"
        control={control}
        label="Email"
        containerInputStyle={styles.containerInputStyle}
        labelStyle={styles.label}
        inputStyle={styles.inputStyle}
        keyboardType="email-address"
        placeholder="Nhập email"
        errorContainerStyle={{marginBottom: getSize.s(10)}}
        onChangeText={() => {}}
      />
      <FormInput
        name="username"
        control={control}
        label="Họ và tên"
        containerInputStyle={styles.containerInputStyle}
        labelStyle={styles.label}
        inputStyle={styles.inputStyle}
        placeholder="Nhập họ và tên"
        errorContainerStyle={{marginBottom: getSize.s(10)}}
        onChangeText={() => {}}
      />
      <FormInput
        name="phone"
        control={control}
        label="Số điện thoại"
        containerInputStyle={styles.containerInputStyle}
        labelStyle={styles.label}
        inputStyle={styles.inputStyle}
        keyboardType="numeric"
        placeholder="Nhập số diện thoại"
        errorContainerStyle={{marginBottom: getSize.s(10)}}
        onChangeText={() => {}}
      />
      <FormInput
        name="password"
        control={control}
        label="Mật khẩu"
        containerInputStyle={styles.containerInputStyle}
        labelStyle={styles.label}
        inputStyle={styles.inputStyle}
        rightstyle={{bottom: 12}}
        placeholder="Nhập mật khẩu"
        onChangeText={() => {}}
        isSecure
      />
      <FormInput
        name="confirmpassword"
        control={control}
        label="Xác nhận mật khẩu"
        containerInputStyle={styles.containerInputStyle}
        labelStyle={styles.label}
        inputStyle={styles.inputStyle}
        rightstyle={{bottom: 12}}
        placeholder="Nhập lại mật khẩu"
        onChangeText={() => {}}
        isSecure
      />
    </Block>
  );
};

export default RegisterForm;
