import {icons} from '@assets';
import {Block, Button, Text} from '@components';
import {useNavigation} from '@react-navigation/core';
import actions, {_onSuccess} from '@redux/actions';
import {theme} from '@theme';
import Storage from '@utils/storage';
import React, {useState} from 'react';
import {Alert, Image, Pressable, ScrollView} from 'react-native';
import RNRestart from 'react-native-restart';
import {useDispatch} from 'react-redux';
import {DATA} from '../data';
import styles from './styles';

const ContentSetting = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(false);
  const onPress = () => {
    setisLoading(true);
    setTimeout(() => {
      setisLoading(false);
      dispatch({type: _onSuccess(actions.LOGOUT_ACCOUNT)});
      Storage.removeItem('CART');
    }, 1000);
    Alert.alert(
      'Thông Báo',
      'Ứng dụng cần được khởi động lại',
      [
        {
          text: 'khởi động lại',
          onPress: () => RNRestart.Restart(),
        },
      ],
      {cancelable: false},
    );
  };
  const _renderItem = (item, index) => {
    return (
      <Block key={item.id}>
        <Text
          size={12}
          marginVertical={10}
          marginHorizontal={12}
          color={theme.colors.placeholder}>
          {item.label}
        </Text>
        {item?.data.map((items, _) => {
          return (
            <Pressable
              key={items.id}
              onPress={() => navigation.navigate(items.navigation)}>
              <Block
                row
                alignCenter
                marginTop={index === 0 ? 1 : 0}
                marginBottom={1}
                paddingHorizontal={12}
                paddingVertical={10}
                backgroundColor="white"
                space="between">
                <Text>{items.title}</Text>
                <Image
                  source={icons.arrow_right}
                  style={styles.iconArrow}
                  resizeMode="contain"
                />
              </Block>
            </Pressable>
          );
        })}
      </Block>
    );
  };
  return (
    <Block flex>
      <ScrollView>{DATA.map(_renderItem)}</ScrollView>
      <Block paddingHorizontal={12}>
        <Button
          title="ĐĂNG XUẤT"
          height={45}
          style={styles.button}
          shadow
          elevation={10}
          onPress={onPress}
          disabled={isLoading}
        />
        <Text
          center
          marginBottom={20}
          size={12}
          color={theme.colors.placeholder}>
          Ants v 1.0
        </Text>
      </Block>
    </Block>
  );
};

export default ContentSetting;
