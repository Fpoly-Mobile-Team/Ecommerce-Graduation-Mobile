import {icons} from '@assets';
import {Block, Text, TextInput} from '@components';
import {AddressContext} from '@context';
import actions, {_onSearch} from '@redux/actions';
import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import React, {useContext, useEffect} from 'react';
import {FlatList, Pressable} from 'react-native';
import {UIActivityIndicator} from 'react-native-indicators';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';

const District = () => {
  const dispatch = useDispatch();
  const config = useSelector(state => state.config?.data);
  const data = useSelector(state => state.district?.data);
  const isLoading = useSelector(state => state.district?.isLoading);

  const addressData = useContext(AddressContext);
  const {id, ref, province, district} = addressData;

  const renderItem = ({item, index}) => {
    const onPress = () => {
      id?.setId(id?.id + 1);
      ref?.current.scrollToIndex({animated: true, index: id?.id + 1});
      district?.setDistrict({idDistrict: item.idDistrict, name: item.name});
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
      type: actions.GET_DISTRICT,
      params: {idProvince: province?.province?.idProvince},
    });
  }, [dispatch, province?.province?.idProvince]);

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
              dispatch({type: _onSearch(actions.GET_DISTRICT), keyword: text});
            }}
            placeholder="Tìm kiếm"
            inputStyle={styles.inputStyle}
          />
          <FlatList
            data={data}
            keyExtractor={(item, index) => item.idDistrict.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </Block>
  );
};

export default District;
