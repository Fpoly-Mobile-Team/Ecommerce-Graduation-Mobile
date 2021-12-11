import {icons} from '@assets';
import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useIsFocused} from '@react-navigation/native';
import {theme} from '@theme';
import {width} from '@utils/responsive';
import React, {useState, useEffect} from 'react';
import {Animated, Image, Pressable, StatusBar} from 'react-native';
import {Badge} from 'react-native-elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import Storage from '@utils/storage';

const HeaderProfile = () => {
  const isFocused = useIsFocused();
  const {top} = useSafeAreaInsets();
  return (
    <Block>
      {isFocused && <StatusBar barStyle="dark-content" translucent animated />}
      <Block
        row
        shadow
        alignCenter
        paddingTop={top + 10}
        paddingVertical={15}
        paddingHorizontal={12}
        backgroundColor={theme.colors.white}>
        <Block flex alignCenter>
          <Block row alignCenter space="between">
            <Block width={(width - 24) * 0.2} />
            <Block width={(width - 24) * 0.6} alignCenter>
              <Text size={18} color={theme.colors.black} fontType="bold">
                Cá nhân
              </Text>
            </Block>
            <Block width={(width - 24) * 0.2}>
              <Cart />
            </Block>
          </Block>
        </Block>
      </Block>
      <Block height={0.5} backgroundColor={theme.colors.smoke} />
    </Block>
  );
};

const Cart = () => {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState();
  const focus = useIsFocused();

  useEffect(() => {
    if (focus) {
      Storage.getItem('CART').then(value => {
        let data = [];
        for (let index = 0; index < value.length; index++) {
          const element = value[index];
          for (let i = 0; i < element.productArray?.length; i++) {
            data.push(element.productArray[i]);
          }
        }
        setQuantity(data?.length);
      });
    }
  }, [focus]);
  return (
    <Block row alignCenter space="between">
      <Pressable
        onPress={() => navigation.navigate(routes.PROGRAMMING_ACCOUNT_SCREEN)}>
        <Block>
          <Image
            source={icons.settings}
            style={{...styles.iconcart, tintColor: theme.colors.black}}
            resizeMode="contain"
          />
        </Block>
      </Pressable>
      <Pressable onPress={() => navigation.navigate(routes.CARTSCREENS)}>
        <Block marginHorizontal={10}>
          {quantity ? (
            <Badge
              status="warning"
              value={quantity}
              containerStyle={styles.containerStyle}
              textProps={{allowFontScaling: false}}
            />
          ) : null}

          <Animated.Image
            source={icons.cart}
            style={{...styles.iconcart, tintColor: theme.colors.black}}
            resizeMode="contain"
          />
        </Block>
      </Pressable>
    </Block>
  );
};

export default HeaderProfile;
