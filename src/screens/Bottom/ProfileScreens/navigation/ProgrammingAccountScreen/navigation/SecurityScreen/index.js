import {Block, Button, Header, Text, TextInput} from '@components';
import FormContainer from '@components/Form/FormContainer';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import moment from 'moment';
import React, {useState} from 'react';
import {LayoutAnimation, Platform, StatusBar, UIManager} from 'react-native';
import {Switch} from 'react-native-gesture-handler';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useSelector} from 'react-redux';
import {DATA} from './components/data';
import FormEditInput from './components/FormEditInput';
import Radio from './components/RadioCustom';
import styles from './styles';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Security = () => {
  const config = useSelector(state => state.config?.data);
  const [name, setName] = useState();

  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [rePassword, setRePassword] = useState();
  const [isSwitchEnabled, setSwitch] = useState(false);
  const [checked, setChecked] = useState('0');
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [date, setDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const thumbColorOn =
    Platform.OS === 'android' ? config?.backgroundcolor : theme.colors.bgSwitch;
  const thumbColorOff =
    Platform.OS === 'android' ? theme.colors.bgSwitch : theme.colors.bgSwitch;
  const trackColorOn = config?.backgroundcolor;
  const trackColorOff = `${config?.backgroundcolor}50`;

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDate(moment(date).format('DD/MM/YYYY'));
    hideDatePicker();
  };

  const renderItem = item => {
    return (
      <Radio
        title={item.title}
        value={checked}
        setValue={setChecked}
        id={item.id}
        key={item.id}
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
        <FormEditInput
          Name={[name, setName]}
          Date={[date, setDate]}
          showDatePicker={showDatePicker}
        />
        <Block paddingHorizontal={12}>
          <Block
            radius={5}
            backgroundColor="white"
            padding={8}
            borderWidth={1}
            borderColor={theme.colors.smoke}>
            <Text
              marginLeft={10}
              size={12}
              color={theme.colors.lightGray}
              fontType="400">
              Giới tính
            </Text>
            <Block
              row
              alignCenter
              space="between"
              marginTop={8}
              paddingHorizontal={12}>
              {DATA.map(renderItem)}
            </Block>
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
          <Button
            onPress={() => {
              LayoutAnimation.easeInEaseOut();
              setShow(!show);
            }}
            title={show ? 'Làm gọn' : 'Hiển thị'}
            width={width / 5}
            height={32}
            shadow
            elevation={10}
            style={{borderRadius: getSize.s(30)}}
          />
        </Block>
        {show && renderSecure()}

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
            height={45}
            style={styles.button}
            shadow
            elevation={5}
          />
        </Block>
      </FormContainer>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Block>
  );
};

export default Security;
