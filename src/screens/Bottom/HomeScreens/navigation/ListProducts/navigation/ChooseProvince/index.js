/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Header, Text, TextInput} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import actions, {_onSearch} from '@redux/actions';
import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import React, {useEffect} from 'react';
import {FlatList, Pressable} from 'react-native';
import {UIActivityIndicator} from 'react-native-indicators';
import {useDispatch, useSelector} from 'react-redux';
import {icons} from '@assets';
import styles from './styles';

const ChooseProvince = ({route}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const config = useSelector(state => state.config?.data);
  const data = useSelector(state => state.province?.data);
  const isLoading = useSelector(state => state.province?.isLoading);

  const renderItem = ({item, index}) => {
    const onPress = () => {
      navigation.navigate(routes.LIST_PRODUCTS, {
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

  useEffect(() => {
    dispatch({
      type: actions.GET_PROVINCE,
    });
  }, [dispatch]);

  return (
    <Block flex width={width} backgroundColor={theme.colors.white}>
      <Header checkBackground canGoBack title="Chọn Tỉnh/Thành Phố" />
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

export default ChooseProvince;
