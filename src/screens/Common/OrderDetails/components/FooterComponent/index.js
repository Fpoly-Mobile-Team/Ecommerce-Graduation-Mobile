import {images} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import React, {useRef} from 'react';
import {Image} from 'react-native';
const FooterComponent = () => {
  return (
    <Block paddingHorizontal={15}>
      <Text paddingVertical={15} size={16} fontType={'bold'}>
        Thông tin đặt hàng:
      </Text>
      <Block row space="between" paddingVertical={10}>
        <Text color={theme.colors.lightGray}>Địa chỉ giao hàng:{'  '}</Text>
        <Block width="60%">
          <Text fontType={'bold'}>
            284 Phan Huy Ich, Phường 12, Quận Gò Vấp, TP.HCM
          </Text>
        </Block>
      </Block>
      <Block alignCenter row space="between" paddingVertical={10}>
        <Text color={theme.colors.lightGray}>Thanh toán:{'  '}</Text>
        <Block alignCenter width="60%" row>
          <Image
            style={{width: '15%', height: 25}}
            source={images.masterCard}
          />
          <Text fontType={'bold'} paddingHorizontal={10}>
            **** **** **** 3947
          </Text>
        </Block>
      </Block>
      <Block alignCenter row space="between" paddingVertical={10}>
        <Text color={theme.colors.lightGray}>Vận chuyển:{'  '}</Text>
        <Block width="60%">
          <Text fontType={'bold'}>Giao hàng tiết kiệm</Text>
        </Block>
      </Block>
      <Block alignCenter row space="between" paddingVertical={10}>
        <Text color={theme.colors.lightGray}>Giảm giá:{'  '}</Text>
        <Block width="60%">
          <Text fontType={'bold'}>10%,mã khuyến mãi cá nhân</Text>
        </Block>
      </Block>
      <Block alignCenter row space="between" paddingVertical={10}>
        <Text color={theme.colors.lightGray}>Tổng cộng:{'  '}</Text>
        <Block width="60%">
          <Text fontType={'bold'}>
            536.799 <Text fontType={'bold'}>VND</Text>
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

export default FooterComponent;
