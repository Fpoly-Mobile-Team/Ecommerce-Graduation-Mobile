/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Text, TextInput} from '@components';
import {AddressContext} from '@context';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import actions, {_onSearch} from '@redux/actions';
import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import React, {useContext, useEffect} from 'react';
import {FlatList, Pressable} from 'react-native';
import {UIActivityIndicator} from 'react-native-indicators';
import {useDispatch, useSelector} from 'react-redux';
import {icons} from '@assets';
import styles from './styles';

const Ward = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const config = useSelector(state => state.config?.data);
  const data = useSelector(state => state.ward?.data);
  const isLoading = useSelector(state => state.ward?.isLoading);
  const addressData = useContext(AddressContext);
  const {district, ward, province} = addressData;
  const address = {
    district: district?.district,
    ward: ward?.ward,
    province: province?.province,
  };

  const renderItem = ({item, index}) => {
    const onPress = () => {
      ward.setWard({idCommune: item.idCommune, name: item.name});
    };
    return (
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? theme.colors.smoke : 'white',
          },
          {borderBottomColor: theme.colors.smoke, borderBottomWidth: 1},
        ]}>
        <Block padding={18}>
          <Text fontType="semibold">{item.name}</Text>
        </Block>
      </Pressable>
    );
  };

  useEffect(() => {
    dispatch({
      type: actions.GET_WARD,
      params: {idDistrict: district?.district?.idDistrict},
    });
  }, [dispatch, district?.district?.idDistrict]);

  useEffect(() => {
    if (ward?.ward?.name) {
      navigation.navigate(routes.ADD_ADDRESS_SCREEN, {
        addressData: address,
      });
    }
  }, [address, ward?.ward?.name]);

  return (
    <Block flex width={width} backgroundColor={theme.colors.white}>
      {isLoading ? (
        <UIActivityIndicator
          size={getSize.s(20)}
          color={config?.backgroundcolor}
        />
      ) : (
        <>
          <TextInput
            leftIcon={icons.search}
            onChangeText={text => {
              dispatch({type: _onSearch(actions.GET_WARD), keyword: text});
            }}
            placeholder="Tìm kiếm"
            inputStyle={styles.inputStyle}
          />
          <FlatList
            data={data}
            keyExtractor={(item, index) => item.idCommune.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </Block>
  );
};

export default Ward;
