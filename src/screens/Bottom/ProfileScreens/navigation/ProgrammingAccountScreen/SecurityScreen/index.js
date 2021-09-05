import {Block, Button, Text, TextInput, Header} from '@components';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import React, {useState} from 'react';
import {Pressable, StatusBar, Platform} from 'react-native';
import {Switch} from 'react-native-gesture-handler';
import styles from './styles';
import FormContainer from '@components/Form/FormContainer';
import Radio from './components/RadioCustom';
import {DATA} from './components/data';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Security = () => {
  const [name, setName] = useState();
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [rePassword, setRePassword] = useState();
  const [isSwitchEnabled, setSwitch] = useState(false);
  const [checked, setChecked] = useState('Nam');
  const navigation = useNavigation();
  const [show, setShow] = useState(false);

  const [date, setDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDate(date);
    hideDatePicker();
  };

  const getDate = () => {
    let tempDate = date.toString().split(' ');
    return date !== '' ? `${tempDate[2]} ${tempDate[1]} ${tempDate[3]}` : '';
  };

  const renderItem = item => {
    return (
      <Radio
        title={item.title}
        value={checked}
        setValue={setChecked}
        id={item.id}
      />
    );
  };

  const renderSecure = () => {
    return (
      <Block paddingHorizontal={12}>
        <TextInput
          label="Mật khẩu cũ"
          containerInputStyle={styles.containerInputStyle}
          labelStyle={styles.label}
          inputStyle={styles.inputStyle}
          rightstyle={{bottom: 12}}
          value="000000000"
          onChangeText={text => setOldPassword(text)}
          isSecure
        />
        <TextInput
          label="Mật khẩu mới"
          containerInputStyle={styles.containerInputStyle}
          labelStyle={styles.label}
          inputStyle={styles.inputStyle}
          rightstyle={{bottom: 12}}
          value="000000000"
          onChangeText={text => setNewPassword(text)}
          isSecure
        />
        <TextInput
          label="Nhập lại mật khẩu mới"
          containerInputStyle={styles.containerInputStyle}
          labelStyle={styles.label}
          inputStyle={styles.inputStyle}
          value="000000000"
          rightstyle={{bottom: 12}}
          onChangeText={text => setRePassword(text)}
          isSecure
        />
      </Block>
    );
  };
  const thumbColorOn =
    Platform.OS === 'android' ? theme.colors.switchOn : theme.colors.bgSwitch;
  const thumbColorOff =
    Platform.OS === 'android' ? theme.colors.bgSwitch : theme.colors.bgSwitch;
  const trackColorOn =
    Platform.OS === 'android' ? theme.colors.switchOff : theme.colors.switchOff;
  const trackColorOff =
    Platform.OS === 'android' ? theme.colors.switchOff : theme.colors.switchOn;

  return (
    <Block flex backgroundColor="background">
      <FormContainer>
        <StatusBar barStyle="dark-content" translucent animated />
        <Header canGoBack checkBackground title="Bảo mật" />
        <Block marginTop={20} paddingBottom={16} paddingHorizontal={12}>
          <Text size={16} fontType="semibold">
            Thông tin người dùng
          </Text>
        </Block>
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
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />

            <TextInput
              label="Ngày sinh"
              editable={false}
              placeholder="dd/mm/yyyy"
              containerInputStyle={styles.containerInputStyle}
              labelStyle={styles.label}
              inputStyle={styles.inputStyle}
              value={getDate()}
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
          <Text color={theme.colors.black}>Giới tính</Text>
          <Block row alignCenter space="between" marginTop={8}>
            {DATA.map(renderItem)}
          </Block>
        </Block>

        <Block
          alignCenter
          row
          space="between"
          paddingTop={16}
          paddingBottom={4}
          paddingHorizontal={12}>
          <Text size={16} fontType="semibold">
            Mật khẩu
          </Text>
          <Block>
            <Button
              onPress={() => setShow(!show)}
              title={show ? 'Làm gọn' : 'Hiển thị'}
              width={102.5}
              height={32.5}
              shadow
              backgroundColor={theme.colors.pink}
              shadowColor={`${theme.colors.pink}80`}
              elevation={10}
              style={{borderRadius: 30}}
            />
          </Block>
        </Block>
        {show ? renderSecure() : null}

        <Block
          row
          space="between"
          paddingTop={16}
          marginBottom={10}
          paddingHorizontal={12}>
          <Text size={16} fontType="semibold">
            Thông báo
          </Text>
          <Switch
            value={isSwitchEnabled}
            onValueChange={value => setSwitch(value)}
            thumbColor={isSwitchEnabled ? thumbColorOn : thumbColorOff}
            trackColor={{false: trackColorOff, true: trackColorOn}}
            ios_backgroundColor={trackColorOff}
          />
        </Block>
        <Block marginBottom={10} paddingHorizontal={12}>
          <Button
            title="CẬP NHẬT"
            backgroundColor={theme.colors.pink}
            height={45}
            style={styles.button}
            shadow
            shadowColor={`${theme.colors.pink}20`}
            elevation={5}
          />
        </Block>
      </FormContainer>
    </Block>
  );
};

export default Security;
