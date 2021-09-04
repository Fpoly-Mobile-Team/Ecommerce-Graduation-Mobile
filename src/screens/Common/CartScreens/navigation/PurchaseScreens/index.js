import {PurchaseSuccess} from '@assets/svg/common';
import {Block, Button, Text} from '@components';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import React from 'react';
import {StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { routes } from '@navigation/routes';

const Purchase = () => {
  const navigation = useNavigation();
  const {top, bottom} = useSafeAreaInsets();

  return (
    <Block flex backgroundColor={theme.colors.white} paddingTop={top + 40}>
      <StatusBar barStyle="dark-content" translucent animated />
      <Block flex={8} alignCenter justifyCenter>
        <Block paddingBottom={32}>
          <PurchaseSuccess />
        </Block>
        <Block paddingBottom={7}>
          <Text size={34} fontType="semibold">
            Đã thanh toán!
          </Text>
        </Block>
        <Block paddingBottom={14}>
          <Text center size={13}>
            Đơn đặt hàng của bạn sẽ sớm được giao
          </Text>
          <Text center size={13}>
            Cảm ơn vì đã lựa chọn chúng tôi!
          </Text>
        </Block>
        <Block>
          <Text
            color={theme.colors.greenStatus}
            fontType="light"
            center
            size={36}>
            95.000 VNĐ
          </Text>
        </Block>
      </Block>
      <Block
        flex={0}
        marginTop={20}
        paddingHorizontal={12}
        paddingBottom={bottom + 12}>
        <Button
        onPress={() => navigation.navigate(routes.BOTTOMTABBAR)}
          title="TIẾP TỤC MUA SẮM"
          height={48}
          shadow
          backgroundColor={theme.colors.pink}
          shadowColor={`${theme.colors.pink}80`}
          elevation={10}
        />
      </Block>
    </Block>
  );
};

export default Purchase;
