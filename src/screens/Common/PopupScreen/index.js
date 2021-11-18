import {icons} from '@assets';
import {Block} from '@components';
import {useNavigation} from '@react-navigation/core';
import {width} from '@utils/responsive';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';

const PopupScreen = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.goBack();
  };
  return (
    <Block flex justifyCenter alignCenter>
      <Block height={width} width={width * 0.7}>
        <Image
          source={{
            uri: 'https://thanbarber.com/wp-content/uploads/2021/08/DON-SIEU-SALE-NHAN-SIEU-VOUCHER-CUNG-VAN-THANH.jpg?v=1629885621',
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <Pressable style={styles.Button} onPress={onPress}>
          <Image
            source={icons.close}
            style={styles.image_close}
            resizeMode="contain"
          />
        </Pressable>
      </Block>
    </Block>
  );
};

export default PopupScreen;
