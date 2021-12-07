import {Block, Text, TextInput} from '@components';
import actions, {_onSearch} from '@redux/actions';
import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import React, {useEffect, useContext} from 'react';
import {FlatList, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {UIActivityIndicator} from 'react-native-indicators';
import {AddressContext} from '@context';
import {icons} from '@assets';
import styles from './styles';

const Province = () => {
  const config = useSelector(state => state.config?.data);
  const data = useSelector(state => state.province?.data);
  const isLoading = useSelector(state => state.province?.isLoading);
  const addressData = useContext(AddressContext);
  const {id, ref, province} = addressData;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: actions.GET_PROVINCE});
  }, [dispatch]);

  const renderItem = ({item, index}) => {
    const onPress = () => {
      id?.setId(id?.id + 1);
      ref?.current.scrollToIndex({animated: true, index: id?.id + 1});
      province?.setProvince({
        idProvince: item.idProvince,
        name: item.name,
      });
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
              dispatch({type: _onSearch(actions.GET_PROVINCE), keyword: text});
            }}
            placeholder="Tìm kiếm"
            inputStyle={styles.inputStyle}
          />
          <Block height={10} />
          <FlatList
            data={data}
            keyExtractor={(item, index) => item.idProvince.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </Block>
  );
};

export default Province;
