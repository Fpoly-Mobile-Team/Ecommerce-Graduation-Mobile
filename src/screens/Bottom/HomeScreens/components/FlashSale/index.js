import {icons} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Image, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
const FlashSale = () => {
  return (
    <ImageBackground
      source={icons.bg_flash}
      style={styles.imgbackground}
      imageStyle={styles.imageStyle}
      resizeMode="cover">
      <Block row alignCenter padding={10} space="between">
        <Block row alignCenter>
          <Image
            source={icons.giasoc}
            style={styles.styleflash}
            resizeMode="contain"
          />
          <Image
            source={icons.flash}
            style={{
              ...styles.styleflash,
              width: getSize.s(20),
              height: getSize.s(20),
            }}
            resizeMode="contain"
          />
          <Image
            source={icons.homnay}
            style={{...styles.styleflash, width: getSize.s(113)}}
            resizeMode="contain"
          />
        </Block>
        <Pressable style={styles.stylebtn}>
          <Text size={12} color={theme.colors.white}>
            Xem tất cả
          </Text>
          <Image
            source={icons.next}
            style={styles.iconnext}
            resizeMode="contain"
          />
        </Pressable>
      </Block>
    </ImageBackground>
  );
};

export default FlashSale;
