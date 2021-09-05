import {Block, TextInput} from '@components';
import React from 'react';
import {Pressable} from 'react-native';
import styles from './styles';

const FormEditInput = ({Name, Date, showDatePicker}) => {
  const [name, setName] = Name;
  const [date, setDate] = Date;
  return (
    <Block paddingHorizontal={12}>
      <TextInput
        label="Họ và tên"
        containerInputStyle={styles.containerInputStyle}
        labelStyle={styles.label}
        inputStyle={styles.inputStyle}
        placeholder="Nhập họ và tên"
        onChangeText={text => setName(text)}
      />
      <Pressable
        onPress={() => {
          showDatePicker();
        }}>
        <TextInput
          label="Ngày sinh"
          editable={false}
          placeholder="dd/mm/yyyy"
          containerInputStyle={styles.containerInputStyle}
          labelStyle={styles.label}
          inputStyle={styles.inputStyle}
          value={date}
        />
      </Pressable>

      <TextInput
        label="Số điện thoại"
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="number-pad"
        containerInputStyle={styles.containerInputStyle}
        labelStyle={styles.label}
        inputStyle={styles.inputStyle}
      />
      <TextInput
        label="Email"
        placeholder="Nhập email của bạn"
        keyboardType="email-address"
        containerInputStyle={styles.containerInputStyle}
        labelStyle={styles.label}
        inputStyle={styles.inputStyle}
      />
    </Block>
  );
};

export default FormEditInput;
