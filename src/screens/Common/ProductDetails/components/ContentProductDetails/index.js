import {icons} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {Rating} from 'react-native-elements';
import styles from './styles';

const ContentProductDetails = () => {
  return (
    <Block paddingVertical={10}>
      <Block paddingHorizontal={12}>
        <Block row alignCenter marginVertical={5}>
          <Block>
            <Block row alignCenter space="between" width={width - 24}>
              <Text size={24} color={theme.colors.red} fontType="bold">
                899.000 ₫
              </Text>
              <Pressable>
                <Image
                  source={icons.favorite}
                  style={styles.iconfav}
                  resizeMode="contain"
                />
              </Pressable>
            </Block>

            <Block row alignCenter>
              <Text
                marginVertical={5}
                color={theme.colors.lightGray}
                style={styles.txtunderprice}>
                960.000 ₫
              </Text>
              <Block
                alignCenter
                justifyCenter
                radius={2}
                paddingHorizontal={2}
                marginLeft={10}
                backgroundColor={theme.colors.sell}>
                <Text
                  center
                  size={12}
                  color={theme.colors.white}
                  fontType="semibold">
                  -35%
                </Text>
              </Block>
            </Block>
          </Block>
        </Block>
        <Text size={16} fontType="bold">
          Điện Thoại Vsmart Live 4 (6GB/64GB) - Hàng Chính Hãng
        </Text>
        <Block
          row
          alignCenter
          marginVertical={8}
          width={width - 44}
          space="between">
          <Block row alignCenter>
            <Rating imageSize={getSize.s(15)} readonly startingValue={4} />
            <Text marginLeft={getSize.m(5)} color={theme.colors.placeholder}>
              (Xem 25 đánh giá)
            </Text>
          </Block>
          <Text color={theme.colors.placeholder}>Đã bán 1,3k</Text>
        </Block>
      </Block>
      <Block height={10} marginTop={10} backgroundColor={theme.colors.smoke} />
      <Block paddingHorizontal={12} paddingVertical={12}>
        <Block row alignCenter space="between">
          <Text size={15} fontType="semibold">
            {25} Mã Giảm Giá
          </Text>
          <Block row flex alignCenter justifyCenter>
            {[1, 2].map(_renderCoupon)}
          </Block>
          <Pressable>
            <Image
              source={icons.next}
              style={{width: getSize.s(14), height: getSize.s(14)}}
              resizeMode="contain"
            />
          </Pressable>
        </Block>
      </Block>
      <Block height={10} backgroundColor={theme.colors.smoke} />
    </Block>
  );
};

const _renderCoupon = index => {
  return (
    <Pressable key={index}>
      <Block
        row
        relative
        margin={3}
        alignCenter
        justifyCenter
        radius={4}
        borderColor={theme.colors.pink}
        borderWidth={1}
        paddingVertical={6}
        paddingHorizontal={12}>
        <Block
          absolute
          left={-7}
          height={12}
          width={12}
          style={styles.radiuscouponLeft}
          borderColor={theme.colors.pink}
          backgroundColor={theme.colors.white}
        />
        <Text color={theme.colors.pink} fontType="semibold">
          Giảm 500k
        </Text>
        <Block
          absolute
          right={-7}
          height={12}
          width={12}
          style={styles.radiuscouponRight}
          borderColor={theme.colors.pink}
          backgroundColor={theme.colors.white}
        />
      </Block>
    </Pressable>
  );
};

export default ContentProductDetails;
