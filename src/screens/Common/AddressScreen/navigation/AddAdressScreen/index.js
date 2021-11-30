import {
  Block,
  Button,
  FormInput,
  Header,
  TextInput,
  FormContainer,
} from '@components';
import {yupResolver} from '@hookform/resolvers/yup';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import actions from '@redux/actions';
import {Toast} from '@utils/helper';
import React from 'react';
import {useForm} from 'react-hook-form';
import {Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {validation} from './validation';

const INITIAL_VALUES = {
  name: '',
  phone: '',
  street: '',
};

const AddAddressScreen = ({route}) => {
  const {addressData} = route.params || {};
  const dispatch = useDispatch();
  const user = useSelector(state => state.tokenUser?.data);
  const isLoading = useSelector(state => state.addAddress?.isLoading);

  const navigation = useNavigation();

  const {control, handleSubmit} = useForm({
    resolver: yupResolver(validation),
    mode: 'onChange',
    defaultValues: INITIAL_VALUES,
  });

  const onPress = () => {
    navigation.navigate(routes.CHOOSE_A_DELIVERY_ADDRESS_SCREEN);
  };

  const _onSubmit = values => {
    if (
      addressData?.province?.name &&
      addressData?.district?.name &&
      addressData?.ward?.name
    ) {
      dispatch({
        type: actions.ADD_ADDRESS,
        user,
        body: {
          full_name: values.name,
          phone: values.phone,
          province: addressData?.province?.name,
          district: addressData?.district?.name,
          ward: addressData?.ward?.name,
          street: values.street,
        },
      });
      if (!isLoading) {
        navigation.navigate(routes.ADDRESS_SCREEN);
      }
    } else {
      Toast('Tỉnh/Huyện/Phường không được để trống');
    }
  };

  return (
    <Block flex>
      <Header checkBackground canGoBack title="Thêm địa chỉ mới" />
      <FormContainer>
        <Block paddingHorizontal={12} paddingTop={10}>
          <FormInput
            name="name"
            control={control}
            label="Họ và tên"
            containerInputStyle={styles.containerInputStyle}
            labelStyle={styles.label}
            inputStyle={styles.inputStyle}
            placeholder="Nhập họ và tên"
            onChangeText={() => {}}
          />
          <FormInput
            name="phone"
            control={control}
            label="Số điện thoại"
            containerInputStyle={styles.containerInputStyle}
            labelStyle={styles.label}
            inputStyle={styles.inputStyle}
            keyboardType="phone-pad"
            placeholder="Nhập số điện thoại"
            onChangeText={() => {}}
          />
          <Pressable onPress={onPress}>
            <TextInput
              label="Tỉnh/ Thành phố"
              containerInputStyle={styles.containerInputStyle}
              labelStyle={styles.label}
              inputStyle={styles.inputStyle}
              placeholder="Tỉnh/ Thành phố"
              disabled
              value={addressData?.province?.name}
            />
          </Pressable>

          <TextInput
            disabled
            onPress={onPress}
            label="Quận/Huyện"
            containerInputStyle={styles.containerInputStyle}
            labelStyle={styles.label}
            inputStyle={styles.inputStyle}
            placeholder="Quận/Huyện"
            value={addressData?.district?.name}
          />

          <Pressable onPress={onPress}>
            <TextInput
              disabled
              label="Phường/Xã"
              containerInputStyle={styles.containerInputStyle}
              labelStyle={styles.label}
              inputStyle={styles.inputStyle}
              placeholder="Phường/Xã"
              value={addressData?.ward?.name}
            />
          </Pressable>

          <FormInput
            name="street"
            control={control}
            label="Tên đường, Toà nhà, Số nhà."
            containerInputStyle={styles.containerInputStyle}
            labelStyle={styles.label}
            inputStyle={styles.inputStyle}
            placeholder="Tên đường, Toà nhà, Số nhà."
            onChangeText={() => {}}
          />
        </Block>
        <Block paddingHorizontal={12}>
          <Button
            disabled={isLoading}
            title="THÊM MỚI"
            height={45}
            style={styles.btnCheck}
            onPress={handleSubmit(_onSubmit)}
          />
        </Block>
      </FormContainer>
    </Block>
  );
};

export default AddAddressScreen;
