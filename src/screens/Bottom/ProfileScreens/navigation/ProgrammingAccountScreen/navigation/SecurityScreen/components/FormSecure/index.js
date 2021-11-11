import {Block, FormInput} from '@components';
import React from 'react';
import styles from './styles';

const FormSecure = ({control}) => {
  return (
    <Block paddingHorizontal={12}>
      <FormInput
        name="currentPassword"
        control={control}
        label="Mật khẩu hiện tại"
        containerInputStyle={styles.containerInputStyle}
        labelStyle={styles.label}
        inputStyle={styles.inputStyle}
        rightstyle={styles.rightStyle}
        onChangeText={() => {}}
        isSecure
      />

      <FormInput
        name="password"
        control={control}
        label="Mật khẩu mới"
        containerInputStyle={styles.containerInputStyle}
        labelStyle={styles.label}
        inputStyle={styles.inputStyle}
        rightstyle={styles.rightStyle}
        onChangeText={() => {}}
        isSecure
      />

      <FormInput
        name="confirmPassword"
        control={control}
        label="Nhập lại mật khẩu mới"
        containerInputStyle={styles.containerInputStyle}
        labelStyle={styles.label}
        inputStyle={styles.inputStyle}
        rightstyle={styles.rightStyle}
        onChangeText={() => {}}
        isSecure
      />
    </Block>
  );
};

export default FormSecure;
